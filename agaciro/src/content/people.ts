export type PersonKind = "board" | "exec" | "team";

export type Person = {
  name: string;
  role: string;
  kind: PersonKind;
  slug: string;
  bio: string;
};

const person = (name: string, role: string, kind: PersonKind, slug: string): Person => ({
  name,
  role,
  kind,
  slug,
  bio: `${name} serves as ${role.toLowerCase()} at Agaciro Development Fund.`,
});

export const people: Person[] = [
  person("Mr. Scott T. Ford", "Chairman", "board", "scott-t-ford"),
  person("Dr. Thierry Mihigo Kalisa", "Vice-Chairman", "board", "thierry-mihigo-kalisa"),
  person("Mrs. Doreen G. Karake", "Member", "board", "doreen-g-karake"),
  person("Mrs. Jeanne Francoise Mubiligi", "Member", "board", "jeanne-francoise-mubiligi"),
  person("Mr. Aime Ngarukiyintwali", "Member", "board", "aime-ngarukiyintwali"),
  person("Mr. Andrew Rozanov", "Member", "board", "andrew-rozanov"),
  person("Ulrich Kayinamura", "CEO", "exec", "ulrich-kayinamura"),
  person("Ismael Amri Sued", "Chief Legal Officer and Company Secretary", "exec", "ismael-amri-sued"),
  person("Nathaniel Nyika", "Chief Investment Officer", "exec", "nathaniel-nyika"),
  person("Jerry Ntare", "Team member", "team", "jerry-ntare"),
  person("Bienfait Banaga", "Ag. Chief Finance and Administrative Officer", "team", "bienfait-banaga"),
  person("Zackiah Nandugwa", "Team member", "team", "zackiah-nandugwa"),
  person("Charles Ndahimana", "Team member", "team", "charles-ndahimana"),
  person("Felicien Rimenyande", "Team member", "team", "felicien-rimenyande"),
  person("Lilian S. Mutesi", "Team member", "team", "lilian-s-mutesi"),
  person("Valentine Nyinawumuntu", "Team member", "team", "valentine-nyinawumuntu"),
  person("Benjamin Igeno", "Team member", "team", "benjamin-igeno"),
  person("Elise Ntamitondero", "Team member", "team", "elise-ntamitondero"),
  person("Sedar Sagamba", "Team member", "team", "sedar-sagamba"),
  person("Sabine Iradukunda Mugunga", "Team member", "team", "sabine-iradukunda-mugunga"),
  person("Cliff Hakizabera", "Team member", "team", "cliff-hakizabera"),
  person("Prince Ntwari", "Team member", "team", "prince-ntwari"),
  person("Sandrine Isimbi Butera", "Team member", "team", "sandrine-isimbi-butera"),
  person("Landry Girinshuti", "Team member", "team", "landry-girinshuti"),
  person("Keith Ntagozera", "Team member", "team", "keith-ntagozera"),
];

export const board = people.filter((item) => item.kind === "board");
export const team = people.filter((item) => item.kind !== "board");
export const leadership = [
  people.find((item) => item.slug === "ulrich-kayinamura")!,
  people.find((item) => item.slug === "scott-t-ford")!,
];

export function findPerson(slug: string) {
  return people.find((item) => item.slug === slug);
}
