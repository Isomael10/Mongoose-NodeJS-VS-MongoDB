const createAndSavePerson = async () => {
    try {
      const person = new Person({
        name: 'John Doe',
        age: 30,
        favoriteFoods: ['Pizza', 'Sushi']
      });
      const data = await person.save();
      console.log('Document sauvegardé:', data);
    } catch (err) {
      console.error(err);
    }
  };
  
  createAndSavePerson();

  const createManyPeople = async () => {
    const arrayOfPeople = [
      { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Burger'] },
      { name: 'Bob', age: 28, favoriteFoods: ['Pasta', 'Ice Cream'] },
      { name: 'Charlie', age: 32, favoriteFoods: ['Steak', 'Fries'] }
    ];
    try {
      const people = await Person.insertMany(arrayOfPeople);
      console.log('Documents ajoutés:', people);
    } catch (err) {
      console.error(err);
    }
  };
  
  createManyPeople();

  const findPeopleByName = async (name) => {
    try {
      const people = await Person.find({ name });
      console.log('Personnes trouvées:', people);
    } catch (err) {
      console.error(err);
    }
  };
  
  findPeopleByName('Alice');

  const findOneByFavoriteFood = async (food) => {
    try {
      const person = await Person.findOne({ favoriteFoods: food });
      console.log('Personne trouvée:', person);
    } catch (err) {
      console.error(err);
    }
  };
  
  findOneByFavoriteFood('Pizza');

  const findPersonById = async (id) => {
    try {
      const person = await Person.findById(id);
      console.log('Personne trouvée par ID:', person);
    } catch (err) {
      console.error(err);
    }
  };
  
  // Remplacez par un ID existant
  findPersonById('ID_A_REMPLACER');

  const addFavoriteFood = async (id, food) => {
    try {
      const person = await Person.findById(id);
      if (person) {
        person.favoriteFoods.push(food);
        const updatedPerson = await person.save();
        console.log('Personne mise à jour:', updatedPerson);
      } else {
        console.log('Personne non trouvée');
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  // Remplacez par un ID et un aliment
  addFavoriteFood('ID_A_REMPLACER', 'Hamburger');

  const updateAge = async (name, newAge) => {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name },
        { age: newAge },
        { new: true }
      );
      console.log('Personne mise à jour:', updatedPerson);
    } catch (err) {
      console.error(err);
    }
  };
  
  updateAge('Alice', 20);

  const deletePersonById = async (id) => {
    try {
      const deletedPerson = await Person.findByIdAndRemove(id);
      console.log('Personne supprimée:', deletedPerson);
    } catch (err) {
      console.error(err);
    }
  };
  
  // Remplacez par un ID existant
  deletePersonById('ID_A_REMPLACER');

  const deleteManyPeople = async (name) => {
    try {
      const result = await Person.deleteMany({ name });
      console.log('Personnes supprimées:', result);
    } catch (err) {
      console.error(err);
    }
  };
  
  deleteManyPeople('Mary');

  const queryChain = async () => {
    try {
      const people = await Person.find({ favoriteFoods: 'Burritos' })
        .sort({ name: 1 }) // Tri alphabétique
        .limit(2) // Limite à 2 résultats
        .select('-age'); // Exclure le champ âge
      console.log('Résultats filtrés:', people);
    } catch (err) {
      console.error(err);
    }
  };
  
  queryChain();
  