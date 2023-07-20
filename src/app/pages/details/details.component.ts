import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';

  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  public isLoading: boolean = false;

  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);
  
    return forkJoin([pokemon, name]).subscribe(
      (res: [any, any]) => {
        this.pokemon = res;
        this.isLoading = true;
  
        console.log(res);
      },
      error => {
        this.apiError = true;
      }
    );
  }
  
  getStyleFont(type: string): any{
    let style: any = {};

    switch (type) {
      case 'grass':
        style.color = '#00CA69';
        break;
      case 'fire':
        style.color = '#D95308';
        break;
      case 'electric':
        style.color = '#FCC719';
        break;
      case 'water':
        style.color = '#0881D9';
        break;
      case 'bug':
        style.color = '#56AC54';
        break;
      case 'normal':
        style.color = '#8D8D8D';
        break;
      case 'poison':
        style.color = '#8122BB';
        break;

      case 'ghost':
        style.color = '#8122BB';
        break;

      case 'fighting':
        style.color = '#E23434';
        break;

      case 'psychic':
        style.color = '#DC33CB';
        break;

      case 'rock':
        style.color = '#937E4B';
        break;

      case 'ground':
        style.color = '#D3C96A';
        break;

      case 'fairy':
        style.color = '#F171E4';
        break;
      // Adicione outros casos para outros tipos de Pokémon
      default:
        style.color = 'transparent'; // Cor padrão se nenhum tipo correspondente for encontrado
    }
    return style;
  }

  getStyle(type: string): any {
    let style: any = {};
  
    switch (type) {
      case 'grass':
        style.backgroundColor = '#00CA69';
        style.boxShadow = '0px 4px 10px 10px rgba(0, 202, 105, 0.60)';
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
