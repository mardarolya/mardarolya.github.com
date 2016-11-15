var Pokedex;
(function (Pokedex) {
    var ViewPokemon;
    (function (ViewPokemon) {
        'use strict';
        var pList = angular.module("Pokedex.ViewPokemon", ["ui.router"]);
        var PokemonView = (function () {
            function PokemonView($stateParams, $http) {
                var _this = this;
                this.id = $stateParams.pokemonId;
                this.http = $http;
                var url = "http://pokeapi.co/api/v1/pokemon/" + this.id + ".png";
                this.listProperty = [];
                this.loading = document.querySelector(".loading");
                this.loading.style.display = "block";
                this.http.get(url).success(function (data) { return _this.allInfo(data); });
            }
            PokemonView.prototype.allInfo = function (data) {
                this.pokemonName = data.name;
                this.pokemonImage = "http://pokeapi.co/media/img/" + data.pkdx_id + ".png";
                this.listProperty.push({ property: "Type", value: data["types"] });
                this.listProperty.push({ property: "Attack", value: data["attack"] });
                this.listProperty.push({ property: "Defense", value: data["defense"] });
                this.listProperty.push({ property: "HP", value: data["hp"] });
                this.listProperty.push({ property: "SP Attack", value: data["sp_atk"] });
                this.listProperty.push({ property: "SP Defense", value: data["sp_def"] });
                this.listProperty.push({ property: "Speed", value: data["speed"] });
                this.listProperty.push({ property: "Weight", value: data["weight"] });
                this.listProperty.push({ property: "Total moves", value: data["total"] });
                this.loading.style.display = "none";
            };
            return PokemonView;
        }());
        pList.controller("pokemonView", PokemonView);
    })(ViewPokemon = Pokedex.ViewPokemon || (Pokedex.ViewPokemon = {}));
})(Pokedex || (Pokedex = {}));
