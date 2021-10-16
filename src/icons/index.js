/* eslint-disable import/no-named-default */
import { readable } from 'svelte/store';
import { default as Bug } from './components/Bug.svelte';
import { default as Fire } from './components/Fire.svelte';
import { default as Water } from './components/Water.svelte';
import { default as Steel } from './components/Steel.svelte';
import { default as Grass } from './components/Grass.svelte';
import { default as Ice } from './components/Ice.svelte';
import { default as Poison } from './components/Poison.svelte';
import { default as Fighting } from './components/Fighting.svelte';
import { default as Fairy } from './components/Fairy.svelte';
import { default as Electric } from './components/Electric.svelte';
import { default as Dark } from './components/Dark.svelte';
import { default as Flying } from './components/Flying.svelte';
import { default as Normal } from './components/Normal.svelte';
import { default as Dragon } from './components/Dragon.svelte';
import { default as Ghost } from './components/Ghost.svelte';
import { default as Rock } from './components/Rock.svelte';
import { default as Ground } from './components/Ground.svelte';
import { default as Psychic } from './components/Psychic.svelte';

export default readable({
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Ghost,
  Grass,
  Ground,
  Ice,
  Flying,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
});
