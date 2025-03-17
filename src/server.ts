import app from "./app";
import { Server } from "http";
import config from './config';

const PORT: string | number = config.SERVER.PORT;

const server: Server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${config.SERVER.NODE_ENV}`);
});

export default server;