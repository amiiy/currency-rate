"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(morgan_1.default(':method :url :status :res[content-length] - :response-time ms'));
app.use(compression_1.default());
app.use(body_parser_1.default.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.get('/good', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.body = 'good';
}));
exports.default = app;
//# sourceMappingURL=app.js.map