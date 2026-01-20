export default class ContactInfo {
  constructor(
    public readonly phone: Number,
    public readonly email: string,
    public readonly github: string,
    public readonly linkedin: string,
    public readonly facebook: string,
    public readonly calendly: string = "",
  ) { }
};
