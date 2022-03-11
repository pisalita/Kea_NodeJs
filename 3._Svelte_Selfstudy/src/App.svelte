<script>
  import Nested from './Nested.svelte';
  let src = '../public/image.gif';
	let name = 'Rick Astley';
  let string = `here's some <strong>HTML!!!</strong>`;

  let count = 0;
  $: doubled = count * 2;
	$: quadrupled = doubled * 2;
  $: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}

  import Info from './Info.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

  let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

  let x = 7;

  let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];


  import Thing from './Thing.svelte';

	let things = [
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];

	function handleThingClick() {
		things = things.slice(1);
	}

  let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

  function handleClickOnce() {
		alert('no more alerts')
	}

  import Inner from './Inner.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}

  import Outer from './Outer.svelte';

</script>

<main>
	<h1>Hello {name}!</h1>
  <img {src} alt="{name} dancing">
  <p>These styles...</p>
  <Nested/>
  <p>{@html string}</p>

  <button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
  
  <p>{count} * 2 = {doubled}</p>
  <p>{doubled} * 2 = {quadrupled}</p>

  <Nested answer={42}/>

  <Info {...pkg}/>

  {#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}

<h1>The Famous Cats of YouTube</h1>

<ul>
	{#each cats as { id, name }, i}
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={id}">
				{i + 1}: {name}
			</a>
		</li>
	{/each}
</ul>

<button on:click={handleThingClick}>
	Remove first thing
</button>

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
	<div>
		<h2>Keyed</h2>
		{#each things as thing (thing.id)}
			<Thing current={thing.color}/>
		{/each}
	</div>

	<div>
		<h2>Unkeyed</h2>
		{#each things as thing}
			<Thing current={thing.color}/>
		{/each}
	</div>
</div>

<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
</div>

<button on:click|once={handleClickOnce}>
	Click me
</button>

<br>

<Inner on:message={handleMessage}/>

<br>

<Outer on:message={handleMessage}/>

</main>


<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
  div { width: 100%; height: 100%; }
</style>