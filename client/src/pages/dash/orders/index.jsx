import {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
const ob = {
                _id:1,
                name:'abcd',
                description:'xyz',
                price:'30',
                rating:'2',
                category:'help',
                supply:'10'
}
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[900]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.secondary[900],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Orders=()=> {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Box sx={{ typography: "body1","& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, }} >
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              display="grid"
              rowGap="20px"
              columnGap="20px"
              justifyContent="space-between"
              gridTemplateColumns="3fr 4fr"
            >
              <Product
                _id={ob._id}
                name={ob.name}
                description={ob.description}
                price={ob.price}
                rating={ob.rating}
                category={ob.category}
                supply={ob.supply}
              />
              <Box
                display="grid"
                rowGap="20px"
                columnGap="20px"
                justifyContent="space-between"
                gridTemplateColumns="repeat(2,minmax(0,2fr))"
              >
                <Product
                  _id={ob._id}
                  name={ob.name}
                  description={ob.description}
                  price={ob.price}
                  rating={ob.rating}
                  category={ob.category}
                  supply={ob.supply}
                />
                <Product
                  _id={ob._id}
                  name={ob.name}
                  description={ob.description}
                  price={ob.price}
                  rating={ob.rating}
                  category={ob.category}
                  supply={ob.supply}
                />
                <Product
                  key={ob._id}
                  _id={ob._id}
                  name={ob.name}
                  description={ob.description}
                  price={ob.price}
                  rating={ob.rating}
                  category={ob.category}
                  supply={ob.supply}
                />
                <Product
                  _id={ob._id}
                  name={ob.name}
                  description={ob.description}
                  price={ob.price}
                  rating={ob.rating}
                  category={ob.category}
                  supply={ob.supply}
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
export default Orders