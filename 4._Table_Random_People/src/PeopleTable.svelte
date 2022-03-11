<script>
  import TableHead from "./TableHead.svelte";
  import TableRow from "./TableRow.svelte";
  import faker from '@faker-js/faker';
  
  export let numberOfRows = 100;

  const people = [];

  for(let i = 0; i < numberOfRows; i++){
    people.push({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      music: faker.music.genre(),
      vehicle: faker.vehicle.vehicle(),
    })
  }

</script>

  <table>
    <TableHead />
    {#each people as person}
    <TableRow 
      name={person.name}
      image={person.image}
      music={person.music}
      vehicle={person.vehicle}
    />
    {/each}
  </table>

  <style>
    table {
      width: 100%
    }
  </style>