const moveSchema = {
  accuracy: '',
  description: '',
  id: '',
  name: '',
  pow: '',
  pp: '',
  type: '',
};

const monSchema = {
  ability: '',
  moves: [moveSchema, moveSchema, moveSchema, moveSchema],
  name: '',
  pokedexNum: 0,
};

const teamSchema = () => ({
  isComplete: false,
  mons: [monSchema, monSchema, monSchema, monSchema, monSchema, monSchema],
  name: '',
});

export default teamSchema;
