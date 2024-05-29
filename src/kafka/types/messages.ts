interface UserCreatedMessage {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  is_active: boolean;
}

interface UserDeletedMessage {
  id: string;
}
interface UserUpdatedMessage {
  id: string;
  data: {
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    is_active?: boolean;
  };
}
interface ProductCreatedMessage {
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
}
interface ProductUpdatedMessage {
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
}

interface ProductDeletedMessage {
  id: string;
}
