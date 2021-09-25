Created At: 09/25/2021

# Team Flow:

How should users add/edit pokemon on their team

When a user clicks a box of actions should animate down showing them what they can do

[Click] Empty Pokemon Slot:

- Add Pokemon
- Url: /team/[index of team]/[index of pokemon in team]?action=add
- Ex: /team/1/0?action=add

[Click] Used Pokemon Slot:

- Edit Pokemon

  - Url: /team/[index of team]/[index of pokemon in team]?action=edit
  - Ex: /team/1/0?action=edit

- Delete Pokemon
  - Will delete pokemon from team
  - All you have to do is replace the pokemon at the index in team array with empty pokemon schema
