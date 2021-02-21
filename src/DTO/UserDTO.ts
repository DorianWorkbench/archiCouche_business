export type userGetOne = {
  userId: string;
};

export type userAdd = {
  name: string;
  surname: string;
  pseudo: string;
};
export type userUpdate = {
  id?: string;
  name?: string;
  surname?: string;
  pseudo?: string;
  rooms?: string;
};
export type userDelete = {
  id: number;
};
