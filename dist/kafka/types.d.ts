export declare enum Topics {
    USER_CREATED = "user-created",
    USER_UPDATED = "user-updated",
    USER_DELETED = "user-deleted",
    PRODUCT_CREATED = "product-created",
    PRODUCT_UPDATED = "product-updated",
    PRODUCT_DELETED = "product-deleted"
}
export declare enum ProductsGroup {
    PRODUCT_USER_CREATED_GROUP = "product-user-created-group",
    PRODUCT_USER_UPDATED_GROUP = "product-user-updated-group",
    PRODUCT_USER_DELETED_GROUP = "product-user-deleted-group"
}
export declare enum CartGroups {
    CART_USER_CREATED_GROUP = "cart-userc-created-group",
    CART_USER_UPDATED_GROUP = "cart-user-updated-group",
    CART_USER_DELETED_GROUP = "cart-user-deleted-group",
    CART_PRODUCT_CREATED_GROUP = "cart-product-created-group",
    CART_PRODUCT_UPDATED_GROUP = "cart-product-updated-group",
    CART_PRODUCT_DELETED_GROUP = "cart-product-deleted-group"
}
export interface UserCreatedEvent {
    topic: Topics.USER_CREATED;
    group: CartGroups.CART_USER_CREATED_GROUP | ProductsGroup.PRODUCT_USER_CREATED_GROUP;
    producerMessage: {
        id: string;
    };
}
export interface UserUpdatedEvent {
    topic: Topics.USER_UPDATED;
    group: CartGroups.CART_USER_UPDATED_GROUP | ProductsGroup.PRODUCT_USER_UPDATED_GROUP;
    producerMessage: {
        id: string;
    };
}
export interface UserDeletedEvent {
    topic: Topics.USER_DELETED;
    group: CartGroups.CART_USER_DELETED_GROUP | ProductsGroup.PRODUCT_USER_DELETED_GROUP;
    producerMessage: {
        id: string;
    };
}
export interface ProductCreatedEvent {
    topic: Topics.PRODUCT_CREATED;
    group: CartGroups.CART_PRODUCT_CREATED_GROUP;
    producerMessage: {
        id: string;
        title: string;
        price: number;
        image: string;
        colors?: Array<{
            name: string;
            hex: string;
        }>;
        sizes?: Array<{
            name: string;
            abbreviation: string;
        }>;
        countInStock?: number;
    };
}
export interface ProductUpdatedEvent {
    topic: Topics.PRODUCT_UPDATED;
    group: CartGroups.CART_PRODUCT_UPDATED_GROUP;
    producerMessage: {
        id: string;
        data: {
            title?: string;
            price?: number;
            image?: string;
            colors?: Array<{
                name: string;
                hex: string;
            }>;
            sizes?: Array<{
                name: string;
                abbreviation: string;
            }>;
            countInStock?: number;
        };
    };
}
export interface ProductDeletedEvent {
    topic: Topics.PRODUCT_DELETED;
    group: CartGroups.CART_PRODUCT_DELETED_GROUP;
    producerMessage: {
        id: string;
    };
}
export type MainEvent = UserCreatedEvent | UserUpdatedEvent | UserDeletedEvent | ProductCreatedEvent | ProductUpdatedEvent | ProductDeletedEvent;
export interface EventsEnum {
    USER_CREATED: UserCreatedEvent;
    USER_UPDATED: UserUpdatedEvent;
    USER_DELETED: UserDeletedEvent;
    PRODUCT_CREATED: ProductCreatedEvent;
    PRODUCT_UPDATED: ProductUpdatedEvent;
    PRODUCT_DELETED: ProductDeletedEvent;
}
export declare enum ClientId {
    PRODUCTS = "products",
    CART = "cart"
}
