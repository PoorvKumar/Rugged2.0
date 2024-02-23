import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const AuthContext = createContext({
    isAuthenticated: localStorage.getItem("token")?true:false,
    user: localStorage.getItem("user") === null ? null : JSON.parse(localStorage.getItem("user")),
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    login: () => { },
    googleLogin: () => { },
    logout: () => { },
    roles: [],
    hasAnyRole: (roles) => false,
    loading: false
});

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token")?true:false);
    const [user, setUser] = useState(localStorage.getItem("user") === null ? null : JSON.parse(localStorage.getItem("user")));
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            setLoading(true);

            const authToken = localStorage.getItem("token");
            if (authToken) {
                try {
                    const decodedToken = jwtDecode(authToken);
                    const { exp } = decodedToken;

                    // Token expired
                    if (Date.now() >= exp * 1000) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("refreshToken");
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                    else {
                        // setUser(decodedToken.user);
                        setIsAuthenticated(true);
                    }
                }
                catch (error) {
                    console.log("Error decoding token", error);
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    setIsAuthenticated(false);
                    setUser(null);
                }
                // setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }

            setLoading(false);
        }

        checkAuth();
    }, []);

    const setDetails=(data)=>
    {
        //Storing tokens in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user",JSON.stringify(data.userData))

        // const decodedToken = jwtDecode(authToken);
        // setUser(decodedToken.user);

        setUser(data.userData);
        // setRoles(data.roles);
        setIsAuthenticated(true);
    }

    const login = async (credentials) => {
        setLoading(true);
        const { email, password } = credentials;

        try {
            const response = await api.post('/auth/signin', credentials);
            const { data } = response;

            setDetails(data);
            setLoading(false);

            await fetchCartFromBackend();

            return true;
        }
        catch (error) {
            console.log("Login error:", error.message);
            setLoading(false);
            toast.error("Login Error",{
                position: "top-center"
            });
        }

        return false;
    };

    const googleLogin=async (codeResponse)=>
    {
        setLoading(true);
        const { code }=codeResponse;

        try
        {
            const response=await api.post('/auth/google',{ code });
            const { data }=response;

            setDetails(data);
            setLoading(false);

            return true;
        }
        catch(error)
        {
            console.log("Google Login error:", error.message);
            setLoading(false);
        }

        return false;
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.clear();
    };

    const hasAnyRole = (requiredRoles) => {
        return requiredRoles.some((role) => roles.includes(role));
    };

    const fetchCartFromBackend = async () => {
        try {
            const response = await api.get('/cart',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const { data } = response;
            setCart(data); // Assuming backend returns the entire cart data
            localStorage.setItem("cart", JSON.stringify(data)); // Update local storage
        } catch (error) {
            console.log("Error fetching cart from backend:", error.message);
        }
    };

    const fetchWishlistFromBackend = async () => {
        try {
            const response = await api.get('/wishlist',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const { data } = response;
            setWishlist(data); // Assuming backend returns the entire wishlist data
            localStorage.setItem("wishlist", JSON.stringify(data)); // Update local storage
        } catch (error) {
            console.log("Error fetching wishlist from backend:", error.message);
        }
    };

    const addToCart = async (cartData) => {
        try {
            // Make API call to add product to cart
            const response = await api.post('/cart', cartData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const { data } = response;
            setCart(data);
            localStorage.setItem("cart", JSON.stringify(data));

            await fetchCartFromBackend();
        } catch (error) {
            console.log("Error adding product to cart:", error.message);
        }
    };

    const addToWishlist = async (product) => {
        try {
            // Make API call to add product to wishlist
            const response = await api.post('/wishlist/add', product, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const { data } = response;
            setWishlist(data);
            localStorage.setItem("wishlist", JSON.stringify(data));
        } catch (error) {
            console.log("Error adding product to wishlist:", error.message);
        }
    };

    return <AuthContext.Provider
        value={{
            isAuthenticated,
            user,
            cart,
            wishlist,
            login,
            googleLogin,
            logout,
            hasAnyRole,
            loading,
            setLoading,
            fetchCartFromBackend,
            fetchWishlistFromBackend,
            addToCart,
            addToWishlist
        }}>
        {children}
    </AuthContext.Provider>
};

export { AuthContext, AuthProvider };

export const useAuthenticate = () => useContext(AuthContext);