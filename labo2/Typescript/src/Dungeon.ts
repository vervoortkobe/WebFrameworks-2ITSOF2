import {
  Config,
  createDungeon,
  createObjects,
  Dungeon,
  GameObject,
  GameTile,
} from "./dungeonGenerator";

interface IDungeon {
  print(): void;
  getTileAt(x: number, y: number): GameTile | undefined;
  getObjectAt(x: number, y: number): GameObject | undefined;
  objects: GameObject[];
}

class GameDungeon implements IDungeon {
  private _dungeon: Dungeon;
  private _gameObjects: GameObject[];

  constructor(seed: string, config: Config) {
    this._dungeon = createDungeon(seed, config);
    this._gameObjects = createObjects(this._dungeon, seed);
  }

  print(): void {
    for (let y = 0; y < this._dungeon.grid.length; y++) {
      let line = "";

      for (let x = 0; x < this._dungeon.grid[y].length; x++) {
        let tile = this.getTileAt(x, y);
        let object = this.getObjectAt(x, y);

        if (object) {
          line += "!";
        } else {
          if (tile?.type == "space") {
            line += "█";
          } else if (tile?.type == "floor") {
            line += "*";
          } else if (tile?.type == "door") {
            line += "#";
          }
        }
      }

      console.log(line);
    }
  }
  getTileAt(x: number, y: number): GameTile | undefined {
    return this._dungeon.grid[y][x];
  }
  getObjectAt(x: number, y: number): GameObject | undefined {
    return this._gameObjects.find(
      (obj) => obj.position.x == x && obj.position.y == y
    );
  }
  get objects(): GameObject[] {
    return this._gameObjects;
  }
}
new GameDungeon("ini2t2ialSeed", {
  gridHeight: 50,
  gridWidth: 50,
  maxRooms: 9,
  roomSizeRange: [5, 10],
}).print();

// console.log('███████████████████');
// console.log('█ not implemented █');
// console.log('███████████████████');
