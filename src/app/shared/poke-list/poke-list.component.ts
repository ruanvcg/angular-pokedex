import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

  private setAllPokemons: any;

  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results;
        //console.log(this.getAllPokemons);
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) =>{
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter
  }

  getStyle(type: string): any {
    let style: any = {};
  
    switch (type) {
      case 'grass':
        style.backgroundColor = '#00CA69';
        break;
      case 'fire':
        style.backgroundColor = '#D95308';
        style.boxShadow = '0px 4px 10px 10px rgba(217, 83, 8, 0.60)';
        break;
      case 'electric':
        style.backgroundColor = '#FCC719';
        style.boxShadow = '0px 4px 10px 10px rgba(252, 199, 25, 0.60)';
        break;
      case 'water':
        style.backgroundColor = '#0881D9';
        style.boxShadow = '0px 4px 10px 10px rgba(8, 129, 217, 0.60)';
        break;
      case 'bug':
        style.backgroundColor = '#56AC54';
        style.boxShadow = '0px 4px 10px 10px rgba(86, 172, 84, 0.60)';
        break;
      case 'normal':
        style.backgroundColor = '#8D8D8D';
        style.boxShadow = '0px 4px 10px 10px rgba(141, 141, 141, 0.60)';
        break;
      case 'poison':
        style.backgroundColor = '#8122BB';
        style.boxShadow = '0px 4px 10px 10px rgba(129, 34, 187, 0.60)';
        break;

      case 'ghost':
        style.backgroundColor = '#8122BB';
        style.boxShadow = '0px 4px 10px 10px rgba(129, 34, 187, 0.60)';
        break;

      case 'fighting':
        style.backgroundColor = '#E23434';
        style.boxShadow = '0px 4px 10px 10px rgba(226, 52, 52, 0.60)';
        break;

      case 'psychic':
        style.backgroundColor = '#DC33CB';
        style.boxShadow = '0px 4px 10px 10px rgba(220, 51, 203, 0.60)';
        break;

      case 'rock':
        style.backgroundColor = '#937E4B';
        style.boxShadow = '0px 4px 10px 10px rgba(147, 126, 75, 0.60)';
        break;

      case 'ground':
        style.backgroundColor = '#D3C96A';
        style.boxShadow = '0px 4px 10px 10px rgba(211, 201, 106, 0.60)';
        break;

      case 'fairy':
        style.backgroundColor = '#F171E4';
        style.boxShadow = '0px 4px 10px 10px rgba(241, 113, 228, 0.60)';
        break;
      // Adicione outros casos para outros tipos de Pokémon
      default:
        style.backgroundColor = 'transparent'; // Cor padrão se nenhum tipo correspondente for encontrado
    }
    
    style.boxShadowDefault = style.boxShadow; // Armazena a box-shadow padrão

    return style;
  }
}
