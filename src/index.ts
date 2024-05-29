import NotFound from "./utils/errors/NotFound";
import Unauthorized from "./utils/errors/Unauthorized";
import Forbidden from "./utils/errors/Forbidden";
import BadRequest from "./utils/errors/BadRequest";
import BasicError from "./utils/errors/BasicError";
import ValidationError from "./utils/errors/ValidationError";
import ErrorHandler from "./utils/errors/ErrorHandler";
////////////////////
import JWT from "./utils/JWT/JWT";
////////////////////
import BaseConsumer from "./kafka/BaseConsumer";
import BaseProducer from "./kafka/BaseProducer";
import { MainEvent } from "./kafka/types";
import KafkaClientSingleton from "./kafka/KafkaClient";
import { EventsEnum } from "./kafka/types";
import { Topics } from "./kafka/types";
import { ProductsGroup, CartGroups } from "./kafka/types";
////////////////////
import checkUserAuthenticated from "./utils/middlewares/checkUserAuthenticated";
import validateInput from "./utils/middlewares/validateInputs";
declare global {
  namespace Express {
    interface Request {
      user: {
        user_id: string;
        first_name: string;
        last_name: string;
        email: string;
        is_active: boolean;
        account_confirmed: boolean;
      };
    }
  }
}

export {
  NotFound,
  Unauthorized,
  Forbidden,
  BadRequest,
  BasicError,
  ValidationError,
  ErrorHandler,
  JWT,
  checkUserAuthenticated,
  validateInput,
  BaseConsumer,
  BaseProducer,
  MainEvent,
  KafkaClientSingleton,
  EventsEnum,
  Topics,
  ProductsGroup,
  CartGroups,
};
