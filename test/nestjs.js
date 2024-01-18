"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = exports.ValidationPipe = exports.AppModule = exports.Test = void 0;
var testing_1 = require("@nestjs/testing");
Object.defineProperty(exports, "Test", { enumerable: true, get: function () { return testing_1.Test; } });
var app_module_1 = require("../src/app.module");
Object.defineProperty(exports, "AppModule", { enumerable: true, get: function () { return app_module_1.AppModule; } });
var common_1 = require("@nestjs/common");
Object.defineProperty(exports, "ValidationPipe", { enumerable: true, get: function () { return common_1.ValidationPipe; } });
var prisma_service_1 = require("../src/prisma/prisma.service");
Object.defineProperty(exports, "PrismaService", { enumerable: true, get: function () { return prisma_service_1.PrismaService; } });
//# sourceMappingURL=nestjs.js.map