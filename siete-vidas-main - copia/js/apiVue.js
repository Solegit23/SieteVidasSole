const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://api.thecatapi.com/v1/images/search?limit=22&api_key=TU_API_KEY",
      gatos: [],
      textos: ["Un gato puede correr hasta 48 km/h.",
      "Los gatos pasan entre el 12-16% de sus vidas limpiándose.",
      "Los gatos aparecieron en la Tierra antes que los perros y que muchos animales que han llegado a ser domésticos, pero han sido uno de los últimos en ser domesticados. ",
      "En el Antiguo Egipto los gatos eran adorados y el rapto o la venta de estos animales podía ser penado con la muerte, pues su labor como cazadores de ratas era muy valorado.",
      "En el Antiguo Egipto, si un gato familiar moría, todos los miembros de la familia se depilaban las cejas en señal de duelo.",
      "La palabra egipcia para 'gato' es 'mau'.",
      "Un gato adulto solo maúlla para comunicarse con los seres humanos.",
      "Las gatas, generalmente, son diestras y los gatos, zurdos.",
      "Las fosas nasales de un gato tienen 19 millones de terminaciones nerviosas. El hombre solo 5 millones.",
      "Los bigotes de los gatos les sirven de indicador de espacio. Los usan para medir la distancia con otro objeto y orientarse.",
      "Los gatos no tienen papilas gustativas para lo dulce.",
      "Los gatos duermen una media de 16 horas.",
      "El cerebro de un gato se parece en un 90% al de un ser humano. Tenemos más similitudes con ellos que con los perros.",
      "Los gatos, con el paso de los años, se vuelven intolerantes a la lactosa.",
      "Los gatos tienen más memoria a largo plazo que los perros, sobre todo cuando aprenden algo haciéndolo.",
      "Los gatos sudan por sus patas.",
      "Los gatos pueden saltar hasta 6 veces si longitud.",
      "Los gatos hacen cerca de 100 sonidos, mientras que los perros solo 10.",
      "Un gato tiene la capacidad de cambiar su maullido para conseguir lo que quiera. Puede hasta imitar el llanto de un bebé para obtener comida.",
      "Los gatos tienen 36 músculos en cada oreja y funcionan como antenas parabólicas, dirigiéndolas hacia la fuente del sonido",
      "Los gatos pueden mover sus orejas por separado y girarlas 180°",
      "Cuando un gato frota su cuerpo o su cabeza con alguien o algo es que está marcando su territorio.",
      "Los gatos obedecen mejor a las mujeres porque perciben mejor los sonidos agudos.",
      "La capacidad auditiva de los gatos es asombrosa. Son capaces de oír sonidos a 64 kHz. Nosotros podemos oír máximo sonidos de 20 kHz.",
      "A los gatos les gusta arañar objetos verticales porque les relaja, activa la circulación y tonifica su cuerpo.",
      "Un gato fue alcalde de Talkeetna, Alaska, durante 15 años. Su nombre era Stubbs. Por otra parte, otro gato se postuló para alcalde de la Ciudad de México en 2013.",
      "Los gatos negros traen 'mala suerte' en muchas partes del mundo, pero en Australia y Reino unido es todo lo contrario.",
      "El bufido, es el sonido que produce el gato cuando abre totalmente la boca y expulsa el aire bruscamente para protegerse a sí mismos y demostrar que son peligrosos",
      "Aunque son depredadores, los gatos evitan los conflictos siempre que pueden, y más aún si su rival es el humano que lo cuida. El bufido es una señal de aviso que puede preceder un ataque.",
      "Los gatos, al igual que las serpientes, cuentan con el órgano de Jacobson, un órgano auxiliar del sentido del olfato, entre la nariz y la boca. Por esta razón tu gato se queda con la boca abierta de vez en cuando, para oler mejor.",
      "Un gato panza arriba es sinónimo de que te tiene confianza.",
      "Los gatos no pueden ver algo que esté por debajo de su nariz.",
      "Actualmente, según el Libro Guinness de los Récords, el gato más viejo del mundo se llama Nutmeg, es de Texas, y el pasado 2016 celebró su 31 cumpleaños.",
      "Odian el agua porque su piel no les aisla bien cuando está mojada.",
      "Son expertos en beber agua y no mojarse un pelo.",
      "La nariz de los gatos es única en cada individuo, igual que las huellas dactilares en los humanos.",
      "La lengua de los gatos esta formada por pequeños ganchos que los ayudan a desgarrar la comida. Por eso se siente áspera al tacto.",
      "Los gatos ocultan sus excrementos en arena para esconder el olor y alejar a los posibles depredadores.",
      "Dos grandes conquistadores como fueron Napoleón y Julio César no les temían a los ejércitos enemigos, pero un simple gato les ponía a temblar, ya que les tenían fobia.",
      "El gato más rico se llama Blackie y su dueña le dejó más de 15 millones de libras de herencia.",
      "El gato que tiene el récord de la caída más grande y no fatídica es Andy. Se cayó desde el piso 16 de un edificio de apartamentos y sobrevivió.",
      "Los gatos son adorables y lo sabes.",
        // ... (tu lista de textos)
      ]
    };
  },

  methods: {
    getGatos() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.gatos = data.map(gato => {
            const textoAleatorio = this.textos[Math.floor(Math.random() * this.textos.length)];
            return { ...gato, texto: textoAleatorio };
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
  },

  mounted() {
    this.getGatos();
  },
}).mount('#app');