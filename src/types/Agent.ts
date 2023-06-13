export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string[];
  aboutMe: string;
  review: string;
}

export interface IsformProps {
    key1: string,
    key2: string
}