<script>
  export let name;
  export let image;
  export let music;
  export let vehicle;
</script>


  <tr>
    <td>{name}</td>
    <td><img src={image} alt=""></td>
    <td>{music}</td>
    <td>{vehicle}</td>
  </tr>

  <style>
    td {
      text-align: center;
    }
  </style>