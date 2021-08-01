function createObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'function') return { ...acc, [key]: value.bind(obj) };
    return acc;
  }, {});
}

function Collection(constructor) {
  this.collection = [];
  const SubCollectionConstructor = function (cb) {
    this.subCollection = this.collectionSnapshot.filter(cb);
    this.read = function () {
      return this.subCollection;
    };
    this.update = function (cb) {
      this.subCollection.forEach(cb);
      return this;
    };
  };

  SubCollectionConstructor.prototype.collectionSnapshot = this.collection;

  constructor.prototype.read = function () {
    return this;
  };

  constructor.prototype.collectionSnapshot = this.collection;

  constructor.prototype.remove = function () {
    const index = this.collectionSnapshot.findIndex(el => el.id === this.id);
    return this.collectionSnapshot.splice(index)[0];
  };

  constructor.prototype.update = function (cb) {
    const tmp = [this];
    tmp.forEach(cb);
    return this;
  };

  this.getBy = function (cb) {
    return new SubCollectionConstructor(cb);
  };

  this.readAll = function () {
    return this.collection;
  };

  this.clear = function () {
    this.collection = [];
  };

  this.add = function (...args) {
    this.collection.push(Object.seal(new constructor(...args)));
  };

  this.get = function (cb) {
    return this.collection.find(cb);
  };
}

function Dog(id, name) {
  this.id = id;
  this.name = name;
}

const dogs = new Collection(Dog);

dogs.add(1, 'torpeda');
dogs.add(2, 'kolbasa');

const doggie = dogs.get(dog => dog.id === 1);

doggie.update(dog => {
  dog.name = 'Updated test name 1'; // => Dog instance(id = 1, name = 'Updated test name 1')
});

const dogsSub = dogs.getBy(dog => dog.id < 3);

console.log(dogsSub.read());
dogsSub.update((dog, index) => {
  // => callback iterates through all matches collection's items ([Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')])
  dog.name = `Updated test name ${index}`;
});
console.log(dogsSub.read());

/*
	Collection methods:
	
	1) readAll - returns array of all collection items
	2) add - creates new collection item using passed to Collection constructor, dogsCollection.add(1, 'Test name1') === new Dog(1, 'Test name1') (see example below)
	3) get - gets first matched collection item and allows to operate on it using update, remove, read methods (see example below)
	4) update - allows to update directly collection item, doesn't support initial model's extension (see example below)
	5) remove - removes item from collection
	6) read - returns collection item
*/

module.exports = {
  createObject,
  Collection,
};
