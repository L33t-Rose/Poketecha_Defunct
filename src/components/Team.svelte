<script>
  export let team;
</script>

<div
  class="w-full md:w-56 h-72 md:h-64 md:mr-6 red-card shadow-lg flex flex-col"
>
  <h1 class="flex-1 font-bold text-2xl text-red-500 ">{team.name}</h1>
  <div class="flex-grow h-full">
    <div class="flex h-1/2">
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
    </div>
    <div class="flex h-1/2">
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
      <div class="flex justify-center items-center flex-grow  w-full h-full">
        <div
          class="w-16 h-16 md:w-12 md:h-12  bg-red-500 bg-opacity-25 rounded-full"
        />
      </div>
    </div>
  </div>
  <button class="p-2 font-bold text-md text-white bg-red-400 w-36 rounded-md"
    >View Team</button
  >
</div>
