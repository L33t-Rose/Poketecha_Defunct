/* eslint-disable import/no-named-default */
import { readable } from 'svelte/store';
import Bug from './components/Bug.svelte';
import Fire from './components/Fire.svelte';
import Water from './components/Water.svelte';
import Steel from './components/Steel.svelte';
import Grass from './components/Grass.svelte';
import Ice from './components/Ice.svelte';
import Poison from './components/Poison.svelte';
import Fighting from './components/Fighting.svelte';
import Fairy from './components/Fairy.svelte';
import Electric from './components/Electric.svelte';
import Dark from './components/Dark.svelte';
import Flying from './components/Flying.svelte';
import Normal from './components/Normal.svelte';
import Dragon from './components/Dragon.svelte';
import Ghost from './components/Ghost.svelte';
import Rock from './components/Rock.svelte';
import Ground from './components/Ground.svelte';
import Psychic from './components/Psychic.svelte';

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
