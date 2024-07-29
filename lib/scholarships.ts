type Scholarship = {
  name: string;
  type: "complementary" | "tuition";
  description: string;
  requirements: {
    target_description: string;
    socioeconomic: {
      description: string;
      social_registry_percentage: number | null;
    } | null;
    academic: {
      description: string;
      highschool_average_score: number;
      min_average_obligatory_exams_score: number;
      top_ranking_percentage: number;
    } | null;
    additional_information: {
      description: string | null;
    };
  };
  is_available_for_all_majors: boolean;
  more_information_url: string;
  content: string; // valid markdown
  origin: string // all caps ex: "MINEDUC", "UCH", "UC", "USACH";
  aid_description: string;
};


const scholarships: Scholarship[] = [
  {
    "name": "Beca Bicentenario (BB)",
    "type": "tuition",
    "description": "Te apoyamos en el pago de tu carrera en cualquier universidad con al menos cuatro años de acreditación. Beneficio para estudiantes nuevos y antiguos.",
    "requirements": {
      "target_description": "Estudiantes nuevos: egresados de Enseñanza Media con rendimiento académico meritorio. Estudiantes antiguos: que cursan una carrera en la Educación Superior.",
      "socioeconomic": {
        "description": "Pertenecer al 70% de la población de menores ingresos del país.",
        "social_registry_percentage": 70
      },
      "academic": {
        "description": "Requisitos académicos para estudiantes nuevos y antiguos.",
        "highschool_average_score": 0,
        "min_average_obligatory_exams_score": 510,
        "top_ranking_percentage": 0
      },
      "additional_information": {
        "description": "Estudiantes nuevos en situación de discapacidad tienen 250 cupos especiales."
      }
    },
    "is_available_for_all_majors": true,
    "more_information_url": "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-bicentenario-bb",
    "content": "## Beca Bicentenario (BB)\n\nTe apoyamos en el pago de tu carrera en cualquier universidad con al menos cuatro años de acreditación. Beneficio para estudiantes nuevos y antiguos.\n\n### Para Quiénes\n\n- **Estudiantes nuevos**: egresados de Enseñanza Media con rendimiento académico meritorio.\n- **Estudiantes antiguos**: que cursan una carrera en la Educación Superior.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevos**: Puntaje igual o superior a 510 puntos en el promedio de las pruebas obligatorias en las PAES del año de admisión a la carrera o el anterior.\n- **Estudiantes antiguos**: Puntaje igual o superior a 510 puntos en el promedio de las pruebas obligatorias en las PAES del año de admisión a la carrera o el anterior, o puntaje igual o superior a 500 puntos en el promedio de las pruebas obligatorias en la PDT o PSU para el año de admisión a la carrera o el anterior. Además, cumplir con porcentaje de avance académico.\n\n### Cobertura\n\nFinancia el arancel de referencia anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción.\n2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas.",
    "origin": "MINEDUC",
    "aid_description": "Financia el arancel de referencia anual de la carrera."
  },
  {
    "name": "Beca Nuevo Milenio (BNM)",
    "type": "tuition",
    "description": "Financia tu carrera técnico profesional con el apoyo del Mineduc. Beneficio para estudiantes nuevos y antiguos.",
    "requirements": {
      "target_description": "Estudiantes nuevos: que se matriculen en primer año de una carrera técnica impartida por un centro de formación técnica, instituto profesional, universidad o escuela de las Fuerzas Armadas; o en una carrera profesional impartida por un instituto profesional. Estudiantes antiguos: que cursen una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad, o una profesional impartida por un instituto profesional.",
      "socioeconomic": {
        "description": "Pertenecer al 70% de la población de menores ingresos del país.",
        "social_registry_percentage": 70
      },
      "academic": {
        "description": "Requisitos académicos para estudiantes nuevos y antiguos.",
        "highschool_average_score": 5.0,
        "min_average_obligatory_exams_score": 0,
        "top_ranking_percentage": 0
      },
      "additional_information": {
        "description": "La beca cuenta con 250 cupos especiales para estudiantes en situación de discapacidad."
      }
    },
    "is_available_for_all_majors": true,
    "more_information_url": "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-nuevo-milenio-bnm",
    "content": "## Beca Nuevo Milenio (BNM)\n\nFinancia tu carrera técnico profesional con el apoyo del Mineduc. Beneficio para estudiantes nuevos y antiguos.\n\n### Para Quiénes\n\n- **Estudiantes nuevos**: que se matriculen en primer año de una carrera técnica impartida por un centro de formación técnica, instituto profesional, universidad o escuela de las Fuerzas Armadas; o en una carrera profesional impartida por un instituto profesional.\n- **Estudiantes antiguos**: que cursen una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad, o una profesional impartida por un instituto profesional.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevos**: promedio de notas de Enseñanza Media igual o superior a 5,0.\n- **Estudiantes antiguos**: promedio de notas de Enseñanza Media igual o superior a 5,0. Además, cumplir con porcentaje de avance académico. Se requiere que hayas aprobado al menos el 60% de las asignaturas inscritas durante tu primer año, si pasas a segundo; o el 70% de los ramos inscritos del año académico inmediatamente anterior, si ingresas a tercer año en adelante.\n\n### Cobertura\n\nEl beneficio cuenta con dos modalidades. El monto de la ayuda dependerá de la situación socioeconómica de la o el estudiante, y de los años de acreditación de la institución en la que se matricule.\n\n- **Beca Nuevo Milenio**: para estudiantes pertenecientes al 70% de la población de menores ingresos del país, que se matriculen en centros de formación técnica, institutos profesionales, universidades o escuelas de las Fuerzas Armadas acreditadas al 31 de diciembre de 2023, o que hayan sido eximidas del requisito de acreditación institucional por el Ministerio de Educación para 2023. Financia hasta $600.000 del arancel anual de la carrera.\n- **Beca Nuevo Milenio II**: para estudiantes pertenecientes al 50% de la población de menores ingresos del país, que se matriculen en centros de formación técnica, institutos profesionales, universidades o escuelas de las Fuerzas Armadas acreditadas al 31 de diciembre de 2023 por tres años. Financia hasta $860.000 del arancel anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción.\n2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas.",
    "origin": "MINEDUC",
    "aid_description": "Financia hasta $600.000 o $860.000 del arancel anual de la carrera dependiendo de la modalidad."
  },
  {
    "name": "Beca Juan Gómez Millas (BJGM)",
    "type": "tuition",
    "description": "Obtén apoyo para financiar tus estudios en cualquier institución acreditada. Beneficio para estudiantes nuevas/os y antiguas/os.",
    "requirements": {
      "target_description": "Estudiantes nuevas/os: egresadas/os de Enseñanza Media con rendimiento académico meritorio. Estudiantes antiguas/os: que cursan una carrera en la Educación Superior. Quienes tienen un crédito también pueden inscribirse. Esta beca cuenta además con 250 cupos especiales para estudiantes en situación de discapacidad.",
      "socioeconomic": {
        "description": "Pertenecer al 70% de la población de menores ingresos del país.",
        "social_registry_percentage": 70
      },
      "academic": {
        "description": "Requisitos académicos para estudiantes nuevos y antiguos.",
        "highschool_average_score": 0,
        "min_average_obligatory_exams_score": 510,
        "top_ranking_percentage": 0
      },
      "additional_information": {
        "description": null
      }
    },
    "is_available_for_all_majors": true,
    "more_information_url": "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-juan-gomez-millas-bjgm",
    "content": "## Beca Juan Gómez Millas (BJGM)\n\nObtén apoyo para financiar tus estudios en cualquier institución acreditada. Beneficio para estudiantes nuevas/os y antiguas/os.\n\n### Para Quiénes\n\n- **Estudiantes nuevas/os**: egresadas/os de Enseñanza Media con rendimiento académico meritorio.\n- **Estudiantes antiguas/os**: que cursan una carrera en la Educación Superior. Quienes tienen un crédito también pueden inscribirse.\n\nEsta beca cuenta además con 250 cupos especiales para estudiantes en situación de discapacidad.\n\n### Para Estudiar En\n\nCualquier institución de Educación Superior acreditada al 31 de diciembre de 2023.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevas/os**: Puntaje igual o superior a 510 puntos (escala 100-1.000) en el promedio de las pruebas obligatorias (pruebas Competencia Lectora/Comprensión Lectora y Competencia Matemática 1 /Matemática) en las PAES del año de admisión a la carrera o el anterior (puntaje PAES regular rendida el año 2022 o PDT invierno). Las/los estudiantes que ingresen a la Educación Superior mediante el programa PACE serán eximidas/os de este requisito.\n- **Estudiantes antiguas/os**: Puntaje igual o superior a 510 puntos (escala 100-1.000) en el promedio de las pruebas obligatorias (pruebas Competencia Lectora/Comprensión Lectora y Competencia Matemática 1 /Matemática) en las PAES del año de admisión a la carrera o el anterior (puntaje PAES regular rendida el año 2022 o PDT invierno) o puntaje igual o superior a 500 puntos (escala 150-850) en el promedio de las pruebas obligatorias (pruebas Comprensión Lectora/Lenguaje y Matemáticas) en la PDT o PSU para el año de admisión a la carrera o el anterior, si rendiste la prueba desde el año 2012 en adelante. Además, cumplir con porcentaje de avance académico. Se requiere que hayas aprobado al menos el 60% de las asignaturas inscritas durante tu primer año, si pasas a segundo; o el 70% de los ramos inscritos del año académico inmediatamente anterior, si ingresas a tercer año en adelante.\n\n### Cobertura\n\nFinancia hasta $1.150.000 del arancel anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción informado en esta página.\n2. Revisa tu información de Nivel Socioeconómico en www.fuas.cl durante las fechas informadas en la página.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas en la página.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas en la página.",
    "origin": "MINEDUC",
    "aid_description": "Financia hasta $1.150.000 del arancel anual de la carrera."
  },
  
  

  
]