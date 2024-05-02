const app=require("./app");
const PORT = process.env.PORT || 5000; //port

app.listen(PORT, () => {
  console.log(`Server listeing on PORT:${PORT}`);
});