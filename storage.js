
function Storage(name){
	var items = [];
	var idGenerator = 0;

	this.create = function(obj){
		
		obj.id = JSON.stringify(idGenerator);
		idGenerator = idGenerator + 1;

		items.push(obj);
		
		localStorage.setItem(name, JSON.stringify(items));
		return items;
	}

	this.update = function(id, obj){
	
		for (var i = 0; i < items.length; i++){
			if (items[i].id === id){
				for (var key in obj){
					items[i][key] = obj[key];
				}
			}
		}

		localStorage.setItem(name, JSON.stringify(items));
		return items;
	}

	this.get = function(id){

		for (var i = 0; i < items.length; i++){
			if (items[i].id === id){
				return items[i];
			}
		}
	}

	this.getList = function(){
		var fullList = localStorage.getItem(name);
		return JSON.parse(fullList);
	}

	this.clear = function(name){
		localStorage.removeItem(name);
	}

	this.delete = function(id){

		for (var i = 0; i < items.length; i++){
			if (items[i].id === id){
				items.splice(i, 1);
			}
		}
		localStorage.setItem(name, JSON.stringify(items));
	}

	init();

	function init(){
		if (!isLocalStorageAvailable){
			throw new Error('Zrada, your browser doesn`t support localStorage');
		}

		var itemsInStorage = localStorage.getItem(name);

		if (itemsInStorage && itemsInStorage.length) {
			items = JSON.parse(itemsInStorage);
		}
	}

	function isLocalStorageAvailable() {
	  try {	
	      return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
	      return false;
	  }
	}
}

var usersStorage = new Storage('users');

// var productStorage = new Storage('products');

	// usersStorage.clear();
	// console.log(usersStorage.create({name: 'Vasya'}));
	// console.log(usersStorage.create({name: 'Kolya'}));
	// console.log(usersStorage.create({name: 'Tanya'}));
	// console.log(usersStorage.update('1', {name: 'Vanya', age: '18'}));
	// console.log(usersStorage.delete('1'));
	// console.log(usersStorage.clear('users'));

	console.log(localStorage);