export default class User {
  id!:number;
  email!:string;
  first_name!:string;
  last_name!: string;
  avatar!: string;
}

// data() {
//   return {
//     LocalStorage: [],
//   };
// },
// computed: {
//   localStorage(): any {
//     return this.LocalStorage
//   }
// },
// async mounted() {
//   await this.addUsers()
// },