import dotenv from 'dotenv';
dotenv.config();

import ui from "./UI";
const PORT = process.env.PORT || 3000;

ui.listen(PORT, () => console.log("Xitem Website started on Port: " + PORT + "!"));
