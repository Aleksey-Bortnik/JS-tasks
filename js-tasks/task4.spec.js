describe('Task 4.', () => {
  const task4 = require('./task4.js');
  describe('1 createObject', () => {
    it('should work as expected', () => {
      const obj1 = {
        testField: 1,
        getTestField() {
          return this.testField;
        },
      };
      const getTestField1 = obj1.getTestField;
      expect(getTestField1()).not.toBeDefined();
      const obj2 = task4.createObject({
        testField: 1,
        getTestField() {
          return this.testField;
        },
      });
      const getTestField2 = obj2.getTestField;
      expect(getTestField2()).toEqual(1);
    });
  });
  describe('2 Collection', () => {
    it('should work as expected', () => {
      function Dog(id, name) {
        this.id = id;
        this.name = name;
      }
      const dogsCollection = new task4.Collection(Dog);
      expect(dogsCollection.readAll()).toEqual([]);
      dogsCollection.add(1, 'Test name1'); // Creates instance of Dog
      dogsCollection.add(2, 'Test name2'); // Creates instance of Dog
      dogsCollection.add(3, 'Test name3'); // Creates instance of Dog
      const dogsList = dogsCollection.readAll(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2'), Dog instance(id = 3, name = 'Test name3')]
      expect(dogsList).toBeDefined();
      expect(dogsList.length).toEqual(3);
      dogsList.forEach((dog, index) => {
        expect(dog).toBeInstanceOf(Dog);
        expect(dog.id).toEqual(index + 1);
        expect(dog.name).toMatch(`Test name${index + 1}`);
      });
      const dogsCollectionItem = dogsCollection.get(dog => dog.id === 1);
      dogsCollectionItem
        .update(dog => {
          dog.name = 'Updated test name 1'; // => Dog instance(id = 1, name = 'Updated test name 1')
        })
        .update(dog => {
          dog.someNewField = 'Some new field'; // => nothing changed, collection items don't support initial model's extension (HINT: Object.seal should be used)
        });
      const dog1 = dogsCollectionItem.read(); // => returns Dog instance object(id = 1, name = 'Test name1')
      expect(dog1).toBeInstanceOf(Dog);
      expect(dog1.id).toEqual(1);
      expect(dog1.name).toEqual('Updated test name 1');
      const dogsCollectionItems = dogsCollection.getBy(dog => dog.id < 3);
      dogsCollectionItems.update((dog, index) => {
        // => callback iterates through all matches collection's items ([Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')])
        dog.name = `Updated test name ${index + 1}`;
      });
      const dogsList2 = dogsCollectionItems.read(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')]
      expect(dogsList2).toBeDefined();
      expect(dogsList2.length).toEqual(2);
      dogsList2.forEach((dog, index) => {
        expect(dog).toBeInstanceOf(Dog);
        expect(dog.id).toEqual(index + 1);
        expect(dog.name).toMatch(`Updated test name ${index + 1}`);
      });
      const result = dogsCollectionItem.remove(); // => removes Dog instance object(id = 1, name = 'Updated test name 1') from collection
      expect(result).toBeInstanceOf(Dog);
      expect(result.id).toEqual(1);
      expect(result.name).toMatch('Updated test name 1');
    });
  });
});
