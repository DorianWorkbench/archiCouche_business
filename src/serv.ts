import { app } from "./app";

const PORT = process.env.PORT || 25478;

app.listen(PORT, () => {
  console.log("SERVER ON");
});
