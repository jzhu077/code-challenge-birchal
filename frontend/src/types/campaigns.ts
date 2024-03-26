export interface Campaign {
  id: string;
  company: {
    name: string;
    industry: string;
    coverImage: string;
    logoColour?: string;
    logoImage: string;
  }
  "type": string,
  "status": string,
  "closingInDays": number,
  "closeDate": string,
  "closeDateFormatted": string
}
