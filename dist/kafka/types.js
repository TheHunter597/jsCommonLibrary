"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientId = exports.CartGroups = exports.ProductsGroup = exports.Topics = void 0;
var Topics;
(function (Topics) {
    Topics["USER_CREATED"] = "user-created";
    Topics["USER_UPDATED"] = "user-updated";
    Topics["USER_DELETED"] = "user-deleted";
    Topics["PRODUCT_CREATED"] = "product-created";
    Topics["PRODUCT_UPDATED"] = "product-updated";
    Topics["PRODUCT_DELETED"] = "product-deleted";
})(Topics || (exports.Topics = Topics = {}));
var ProductsGroup;
(function (ProductsGroup) {
    ProductsGroup["PRODUCT_USER_CREATED_GROUP"] = "product-user-created-group";
    ProductsGroup["PRODUCT_USER_UPDATED_GROUP"] = "product-user-updated-group";
    ProductsGroup["PRODUCT_USER_DELETED_GROUP"] = "product-user-deleted-group";
})(ProductsGroup || (exports.ProductsGroup = ProductsGroup = {}));
var CartGroups;
(function (CartGroups) {
    CartGroups["CART_USER_CREATED_GROUP"] = "cart-userc-created-group";
    CartGroups["CART_USER_UPDATED_GROUP"] = "cart-user-updated-group";
    CartGroups["CART_USER_DELETED_GROUP"] = "cart-user-deleted-group";
    ///////////////////////////////
    CartGroups["CART_PRODUCT_CREATED_GROUP"] = "cart-product-created-group";
    CartGroups["CART_PRODUCT_UPDATED_GROUP"] = "cart-product-updated-group";
    CartGroups["CART_PRODUCT_DELETED_GROUP"] = "cart-product-deleted-group";
})(CartGroups || (exports.CartGroups = CartGroups = {}));
var ClientId;
(function (ClientId) {
    ClientId["PRODUCTS"] = "products";
    ClientId["CART"] = "cart";
})(ClientId || (exports.ClientId = ClientId = {}));
