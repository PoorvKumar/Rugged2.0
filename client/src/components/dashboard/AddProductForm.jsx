import React, { useState } from 'react';

const AddProductForm = ({type}) => {
  // State variables for form fields
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [color, setColor] = useState('');

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'productName':
        setProductName(value);
        break;
      case 'sku':
        setSku(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'brand':
        setBrand(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'dimensions':
        setDimensions(value);
        break;
      case 'color':
        setColor(value);
        break;
      default:
        break;
    }
  };

  // Function to handle blur events in input fields
  const handleBlur = (e) => {
    // Perform validation or other actions as needed
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., send it to a server
    console.log('Form submitted with data:', {
      productName,
      sku,
      category,
      brand,
      price,
      quantity,
      description,
      imageUrl,
      weight,
      dimensions,
      color,
    });
  };

  return (
    <div className="py-8">
      <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">
                Product Name
              </label>
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                name="productName"
                value={productName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Product Name"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">SKU</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="sku"
                value={sku}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="SKU"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Category</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Category"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Brand</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="brand"
                value={brand}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Brand"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Price</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Price"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Quantity</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Quantity"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">
                Description
              </label>
              <textarea
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                name="description"
                value={description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Image URL</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Image URL"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Weight</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="weight"
                value={weight}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Weight"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">
                Dimensions
              </label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="dimensions"
                value={dimensions}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Dimensions"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-secondary-900">Color</label>
              <input
                className="w-full bg-white border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                name="color"
                value={color}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Color"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-4 bg-cyan-950 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {type} Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
