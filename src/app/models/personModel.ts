export enum PersonGender {
    Male = "Male",
    Female = "Female",
    Unknown = "Unknown"
}

export enum Feature {
    Feature1 = "Feature1",
    Feature2 = "Feature2",
    Feature3 = "Feature3",
    Feature4 = "Feature4"
}

export interface Location {
    Address: string | null;
}

export interface Person {

    UserName: string;

    FirstName: string;

    LastName: string | null;

    MiddleName: string | null;

    Gender: PersonGender;

    Age: number | null;

    Emails: Array<string>;

    AddressInfo: Array<Location>;

    HomeAddress: Location | null;

    FavoriteFeature: Feature;

    Features: Array<Feature>;

    Friends?: Array<Person>;

    BestFriend?: Person | null;

    // Trips?: Array<Trip>;
}