export type userGetOne = {
  userId: String;
};

export type userAdd = {
  name: string;
  surname: string;
  pseudo: string;
};
export type userUpdate = {
  id: number;
  name: string;
  surname: string;
  pseudo: string;
};
export type userDelete = {
  id: number;
};
