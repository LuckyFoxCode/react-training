interface userGeo {
  lat: string;
  lng: string;
}

interface userAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: userGeo;
}

interface userCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  address: userAdress;
  phone: string;
  website: string;
  company: userCompany;
}
