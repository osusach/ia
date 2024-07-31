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
  origin: string; // all caps ex: "MINEDUC", "UCH", "UC", "USACH";
  aid_description: string;
};

const scholarships: Scholarship[] = [
  {
    name: "Beca Bicentenario (BB)",
    type: "tuition",
    description:
      "Te apoyamos en el pago de tu carrera en cualquier universidad con al menos cuatro años de acreditación. Beneficio para estudiantes nuevos y antiguos.",
    requirements: {
      target_description:
        "Estudiantes nuevos: egresados de Enseñanza Media con rendimiento académico meritorio. Estudiantes antiguos: que cursan una carrera en la Educación Superior.",
      socioeconomic: {
        description:
          "Pertenecer al 70% de la población de menores ingresos del país.",
        social_registry_percentage: 70,
      },
      academic: {
        description:
          "Requisitos académicos para estudiantes nuevos y antiguos.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 510,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description:
          "Estudiantes nuevos en situación de discapacidad tienen 250 cupos especiales.",
      },
    },
    is_available_for_all_majors: true,
    more_information_url:
      "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-bicentenario-bb",
    content:
      "## Beca Bicentenario (BB)\n\nTe apoyamos en el pago de tu carrera en cualquier universidad con al menos cuatro años de acreditación. Beneficio para estudiantes nuevos y antiguos.\n\n### Para Quiénes\n\n- **Estudiantes nuevos**: egresados de Enseñanza Media con rendimiento académico meritorio.\n- **Estudiantes antiguos**: que cursan una carrera en la Educación Superior.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevos**: Puntaje igual o superior a 510 puntos en el promedio de las pruebas obligatorias en las PAES del año de admisión a la carrera o el anterior.\n- **Estudiantes antiguos**: Puntaje igual o superior a 510 puntos en el promedio de las pruebas obligatorias en las PAES del año de admisión a la carrera o el anterior, o puntaje igual o superior a 500 puntos en el promedio de las pruebas obligatorias en la PDT o PSU para el año de admisión a la carrera o el anterior. Además, cumplir con porcentaje de avance académico.\n\n### Cobertura\n\nFinancia el arancel de referencia anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción.\n2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas.",
    origin: "MINEDUC",
    aid_description: "Financia el arancel de referencia anual de la carrera.",
  },
  {
    name: "Beca Nuevo Milenio (BNM)",
    type: "tuition",
    description:
      "Financia tu carrera técnico profesional con el apoyo del Mineduc. Beneficio para estudiantes nuevos y antiguos.",
    requirements: {
      target_description:
        "Estudiantes nuevos: que se matriculen en primer año de una carrera técnica impartida por un centro de formación técnica, instituto profesional, universidad o escuela de las Fuerzas Armadas; o en una carrera profesional impartida por un instituto profesional. Estudiantes antiguos: que cursen una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad, o una profesional impartida por un instituto profesional.",
      socioeconomic: {
        description:
          "Pertenecer al 70% de la población de menores ingresos del país.",
        social_registry_percentage: 70,
      },
      academic: {
        description:
          "Requisitos académicos para estudiantes nuevos y antiguos.",
        highschool_average_score: 5.0,
        min_average_obligatory_exams_score: 0,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description:
          "La beca cuenta con 250 cupos especiales para estudiantes en situación de discapacidad.",
      },
    },
    is_available_for_all_majors: true,
    more_information_url:
      "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-nuevo-milenio-bnm",
    content:
      "## Beca Nuevo Milenio (BNM)\n\nFinancia tu carrera técnico profesional con el apoyo del Mineduc. Beneficio para estudiantes nuevos y antiguos.\n\n### Para Quiénes\n\n- **Estudiantes nuevos**: que se matriculen en primer año de una carrera técnica impartida por un centro de formación técnica, instituto profesional, universidad o escuela de las Fuerzas Armadas; o en una carrera profesional impartida por un instituto profesional.\n- **Estudiantes antiguos**: que cursen una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad, o una profesional impartida por un instituto profesional.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevos**: promedio de notas de Enseñanza Media igual o superior a 5,0.\n- **Estudiantes antiguos**: promedio de notas de Enseñanza Media igual o superior a 5,0. Además, cumplir con porcentaje de avance académico. Se requiere que hayas aprobado al menos el 60% de las asignaturas inscritas durante tu primer año, si pasas a segundo; o el 70% de los ramos inscritos del año académico inmediatamente anterior, si ingresas a tercer año en adelante.\n\n### Cobertura\n\nEl beneficio cuenta con dos modalidades. El monto de la ayuda dependerá de la situación socioeconómica de la o el estudiante, y de los años de acreditación de la institución en la que se matricule.\n\n- **Beca Nuevo Milenio**: para estudiantes pertenecientes al 70% de la población de menores ingresos del país, que se matriculen en centros de formación técnica, institutos profesionales, universidades o escuelas de las Fuerzas Armadas acreditadas al 31 de diciembre de 2023, o que hayan sido eximidas del requisito de acreditación institucional por el Ministerio de Educación para 2023. Financia hasta $600.000 del arancel anual de la carrera.\n- **Beca Nuevo Milenio II**: para estudiantes pertenecientes al 50% de la población de menores ingresos del país, que se matriculen en centros de formación técnica, institutos profesionales, universidades o escuelas de las Fuerzas Armadas acreditadas al 31 de diciembre de 2023 por tres años. Financia hasta $860.000 del arancel anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción.\n2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas.",
    origin: "MINEDUC",
    aid_description:
      "Financia hasta $600.000 o $860.000 del arancel anual de la carrera dependiendo de la modalidad.",
  },
  {
    name: "Beca Juan Gómez Millas (BJGM)",
    type: "tuition",
    description:
      "Obtén apoyo para financiar tus estudios en cualquier institución acreditada. Beneficio para estudiantes nuevas/os y antiguas/os.",
    requirements: {
      target_description:
        "Estudiantes nuevas/os: egresadas/os de Enseñanza Media con rendimiento académico meritorio. Estudiantes antiguas/os: que cursan una carrera en la Educación Superior. Quienes tienen un crédito también pueden inscribirse. Esta beca cuenta además con 250 cupos especiales para estudiantes en situación de discapacidad.",
      socioeconomic: {
        description:
          "Pertenecer al 70% de la población de menores ingresos del país.",
        social_registry_percentage: 70,
      },
      academic: {
        description:
          "Requisitos académicos para estudiantes nuevos y antiguos.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 510,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description: null,
      },
    },
    is_available_for_all_majors: true,
    more_information_url:
      "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-juan-gomez-millas-bjgm",
    content:
      "## Beca Juan Gómez Millas (BJGM)\n\nObtén apoyo para financiar tus estudios en cualquier institución acreditada. Beneficio para estudiantes nuevas/os y antiguas/os.\n\n### Para Quiénes\n\n- **Estudiantes nuevas/os**: egresadas/os de Enseñanza Media con rendimiento académico meritorio.\n- **Estudiantes antiguas/os**: que cursan una carrera en la Educación Superior. Quienes tienen un crédito también pueden inscribirse.\n\nEsta beca cuenta además con 250 cupos especiales para estudiantes en situación de discapacidad.\n\n### Para Estudiar En\n\nCualquier institución de Educación Superior acreditada al 31 de diciembre de 2023.\n\n### Requisitos\n\n**Socioeconómicos**: Pertenecer al 70% de la población de menores ingresos del país.\n\n**Académicos**: \n\n- **Estudiantes nuevas/os**: Puntaje igual o superior a 510 puntos (escala 100-1.000) en el promedio de las pruebas obligatorias (pruebas Competencia Lectora/Comprensión Lectora y Competencia Matemática 1 /Matemática) en las PAES del año de admisión a la carrera o el anterior (puntaje PAES regular rendida el año 2022 o PDT invierno). Las/los estudiantes que ingresen a la Educación Superior mediante el programa PACE serán eximidas/os de este requisito.\n- **Estudiantes antiguas/os**: Puntaje igual o superior a 510 puntos (escala 100-1.000) en el promedio de las pruebas obligatorias (pruebas Competencia Lectora/Comprensión Lectora y Competencia Matemática 1 /Matemática) en las PAES del año de admisión a la carrera o el anterior (puntaje PAES regular rendida el año 2022 o PDT invierno) o puntaje igual o superior a 500 puntos (escala 150-850) en el promedio de las pruebas obligatorias (pruebas Comprensión Lectora/Lenguaje y Matemáticas) en la PDT o PSU para el año de admisión a la carrera o el anterior, si rendiste la prueba desde el año 2012 en adelante. Además, cumplir con porcentaje de avance académico. Se requiere que hayas aprobado al menos el 60% de las asignaturas inscritas durante tu primer año, si pasas a segundo; o el 70% de los ramos inscritos del año académico inmediatamente anterior, si ingresas a tercer año en adelante.\n\n### Cobertura\n\nFinancia hasta $1.150.000 del arancel anual de la carrera.\n\n### Cómo Postular\n\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción informado en esta página.\n2. Revisa tu información de Nivel Socioeconómico en www.fuas.cl durante las fechas informadas en la página.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas en la página.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas en la página.",
    origin: "MINEDUC",
    aid_description:
      "Financia hasta $1.150.000 del arancel anual de la carrera.",
  },

  {
    name: "Beca Vocación de Profesor - Licenciaturas (BVP Licenciatura)",
    type: "tuition",
    description: "Financiamiento estatal para la formación como docente para estudiantes que cursarán el último año de una licenciatura elegible y desean seguir un ciclo o programa de formación pedagógica.",
    requirements: {
      target_description: "Estudiantes que cursarán el último año de una licenciatura elegible en una institución de Educación Superior y que desean seguir un ciclo o programa de formación pedagógica.",
      socioeconomic: null,
      academic: {
        description: "Puntaje PSU promedio (pruebas de Lenguaje y Matemática) obtenido al ingresar a la licenciatura, igual o superior a 600 puntos.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 600,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description: null,
      },
    },
    is_available_for_all_majors: false,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-vocacion-de-profesor-licenciaturas-bvp-licenciatura",
    content: "Financia la matrícula y la totalidad del arancel anual del último año de la licenciatura, más el ciclo pedagógico (de una duración máxima de dos años). Además, otorga un beneficio adicional en caso de haber obtenido 700 puntos PSU o más, que consiste en un aporte mensual de $84 mil, que se entrega a través de Junaeb.",
    origin: "MINEDUC",
    aid_description: "Financiamiento completo de matrícula y arancel anual del último año de licenciatura y ciclo pedagógico, más un aporte mensual adicional para puntajes PSU iguales o superiores a 700 puntos."
  },
  {
    name: "Beca Vocación de Profesor para Licenciados y Profesionales",
    type: "tuition",
    description: "Financiamiento estatal para la formación como docente para personas que cuentan con una licenciatura o título profesional y desean seguir un ciclo o programa de formación pedagógica.",
    requirements: {
      target_description: "Personas que cuentan con una licenciatura o título profesional que se matriculen en un ciclo o programa de formación pedagógica elegible.",
      socioeconomic: null,
      academic: {
        description: "Contar con el grado de licenciado/a o un título profesional otorgado por una Institución de Educación Superior.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 0,
        top_ranking_percentage: 0
      },
      additional_information: {
        description: null
      }
    },
    is_available_for_all_majors: false,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-vocacion-de-profesor-para-licenciados-y-profesionales",
    content: `
  Financia la matrícula y la totalidad del arancel anual del ciclo pedagógico (que puede durar uno o dos años).
  
  ### Compromisos del Alumno
  
  Una vez obtenido el título profesional de profesora o profesor, la/el estudiante becada/o debe trabajar en establecimientos educacionales dependientes de los Servicios Locales de Educación Pública, Municipales, Particulares Subvencionados o de Administración Delegada, donde tendrá que cumplir una jornada laboral docente de 44 horas semanales o su equivalente, durante un periodo igual a la duración del ciclo de formación pedagógica. Dicho plazo se podrá rebajar de conformidad a los criterios que establezca la Subsecretaría de Educación Superior para casos tales como ruralidad, áreas con menor demanda curricular, entre otros.
  
  El plazo máximo para cumplir este compromiso es de 7 años, contados desde la fecha de obtención del título profesional de profesora/or o educadora/or. Este periodo de retribución debe ser certificado por la/el directora/or del establecimiento (formato de certificado disponible al pie de esta página).
  
  Para efectos de obtener la asignación del beneficio y asegurar el cumplimiento de este compromiso, quienes resulten seleccionadas/os con esta beca deben firmar un convenio con el Ministerio de Educación, lo que efectuarán en su respectiva universidad.
  
  Haz tus consultas al correo vocaciondeprofesor@mineduc.cl
  
  ### Cómo Postular
  
  1. Accede a [www.fuas.cl](http://www.fuas.cl) y completa el formulario específico del beneficio, durante las fechas informadas en esta misma página.
  2. Matricúlate en programa o ciclo de formación pedagógica elegible.
  3. Revisa los resultados finales en este sitio durante las fechas informadas en la página.
  4. Si quedas seleccionada/o con la beca, debes firmar un convenio con el Ministerio de Educación que respalda tu compromiso de retribución del beneficio. El documento firmado ante notario se entrega en tu institución de Educación Superior.
  
  ### Cómo Informar mi Retribución
  
  Debes informar tu retribución a través del envío de uno o más certificados de retribución. La cantidad de certificados a enviar dependerá de los cambios que puedan existir en tu contrato. Por ejemplo, si cumples tu retribución en un solo establecimiento y las condiciones de tu contrato no cambian, debes enviar solo una carta cuando tu retribución esté cumplida. En cambio, si te cambias de establecimiento educacional, o las condiciones de tu contrato cambian (por ejemplo, tu cantidad de horas), debes enviar más de un certificado de retribución: uno por cada situación contractual diferente.
  
  IMPORTANTE: Desde el 22 de mayo de 2024 la recepción de Certificados de Retribución Beca Vocación de Profesor y Profesora será en Avenida Alameda Libertador Bernardo O’Higgins 1449, Edificio Santiago Downtown torre 4, piso 6, Santiago, región Metropolitana.
    `,
    origin: "MINEDUC",
    aid_description: "Financiamiento completo de matrícula y arancel anual del ciclo pedagógico, con compromisos de retribución laboral en establecimientos educacionales definidos."
  },
  {
    name: "Beca Vocación de Profesor - Pedagogías (BVP Pedagogía)",
    type: "tuition",
    description: "Financiamiento del costo total de la carrera para estudiantes de Pedagogía, Educación Parvularia o Educación Diferencial acreditadas y elegibles.",
    requirements: {
      target_description: "Estudiantes que se matriculen por primera vez en primer año de carreras de Pedagogía, Educación Parvularia o Educación Diferencial acreditadas y elegibles para este beneficio.",
      socioeconomic: null,
      academic: {
        description: "Puntaje (PAES) promedio (pruebas de Competencia Lectora y Matemática 1) o PDT (Comprensión Lectora y Matemática) igual o superior a 625 puntos; o desde 595 puntos en la PAES si la/el estudiante pertenece al 10% de mejores egresadas/os de su establecimiento educacional dependiente de los Servicios Locales de Educación Pública, de un colegio Municipal, Particular Subvencionado o de Administración delegada, que ingresen a la Educación Superior al año siguiente de finalizar su Enseñanza Media. Las/os estudiantes que ingresen a la Educación Superior mediante el programa PACE serán eximidas/os del requisito de puntaje mínimo (PAES).",
        highschool_average_score: 0, // No especificado
        min_average_obligatory_exams_score: 625,
        top_ranking_percentage: 10
      },
      additional_information: {
        description: "Una vez obtenido el título profesional, la o el estudiante becado debe trabajar por al menos 3 años en establecimientos educacionales dependientes de los Servicios Locales de Educación Pública, Municipales, Particulares Subvencionados o de Administración Delegada, donde tendrá que cumplir una jornada laboral docente de 44 horas semanales o su equivalente. En el caso de las/os tituladas/os de Educación Parvularia, también podrán cumplir este compromiso en jardines infantiles o salas cunas que reciban recursos del Estado."
      },
    },
    is_available_for_all_majors: false,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-vocacion-de-profesor-pedagogias-bvp-pedagogia",
    content: "Financia la matrícula y la totalidad del arancel anual de la carrera. Además, otorga un beneficio adicional en caso de haber obtenido en la PAES un promedio de al menos 800 puntos promedio (Competencia Lectora y Matemática 1), que consiste en un aporte mensual de $84mil, que se entrega a través de Junaeb.",
    origin: "MINEDUC",
    aid_description: "Financiamiento completo de la carrera, incluyendo matrícula y arancel anual, más un aporte mensual adicional para altos puntajes."
  },
  {
    name: "Beca Excelencia Técnica (BET)",
    type: "tuition",
    description: "Apoyamos a las/os mejores egresadas/os de Enseñanza Media que ingresen a carreras técnico profesionales.",
    requirements: {
      target_description: "Mejores egresados de Enseñanza Media de los años 2020, 2021, 2022 y 2023, que opten por una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad; o por una carrera profesional impartida por un instituto profesional.",
      socioeconomic: {
        description: "Pertenecer al 70% de la población de menores ingresos del país.",
        social_registry_percentage: 70,
      },
      academic: {
        description: "Promedio de notas de Enseñanza Media igual o superior a 5,0. Además, para la selección se considerará el lugar que ocupa la/el alumna/o en ranking nacional de establecimientos, que toma en cuenta promedio de notas de Enseñanza Media.",
        highschool_average_score: 5.0,
        min_average_obligatory_exams_score: 0,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description: null
      },
    },
    is_available_for_all_majors: true,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-excelencia-tecnica-bet",
    content: `
  ### Beca Excelencia Técnica (BET)
  
  **Beneficios Estudiantiles Educación Superior**
  
  #### Para quiénes
  Mejores egresados de Enseñanza Media de los años 2020, 2021, 2022 y 2023, que opten por una carrera técnica impartida por un centro de formación técnica, instituto profesional o universidad; o por una carrera profesional impartida por un instituto profesional.
  
  #### Requisitos Socioeconómicos
  Pertenecer al 70% de la población de menores ingresos del país.
  
  #### Requisitos Académicos
  Promedio de notas de Enseñanza Media igual o superior a 5,0. Además, para la selección se considerará el lugar que ocupa la/el alumna/o en ranking nacional de establecimientos, que toma en cuenta promedio de notas de Enseñanza Media.
  
  #### Cobertura
  Hasta $900.000 del arancel anual de la carrera.
  
  #### Cómo Postular
  1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción informado en la página.
  2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas en la página.
  3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas en la página.
  4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.
  5. Revisa los resultados finales en el sitio en las fechas informadas en la página.
  `,
    origin: "MINEDUC",
    aid_description: "Corresponde a cupos especiales dentro de la Beca Nuevo Milenio. Cobertura hasta $900.000 del arancel anual de la carrera.",
  },
  {
    name: "Beca Excelencia Académica (BEA)",
    type: "tuition",
    description: "Si tienes las notas más altas de tu generación, premiamos tus logros académicos ayudándote a financiar tu carrera.",
    requirements: {
      target_description: "El 10% de los mejores egresadas/os de Enseñanza Media de su establecimiento, del mismo año de inscripción a la beca. Deben provenir de establecimientos municipales, particulares subvencionados y de administración delegada; e ingresar a la Educación Superior al año siguiente de terminar su Enseñanza Media.",
      socioeconomic: {
        description: "Pertenecer al 80% de la población de menores ingresos del país.",
        social_registry_percentage: 80,
      },
      academic: {
        description: "Promedio de notas de Enseñanza Media dentro del 10% más alto del establecimiento.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 0,
        top_ranking_percentage: 10,
      },
      additional_information: {
        description: null,
      },
    },
    is_available_for_all_majors: true,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-excelencia-academica-bea",
    content: `
  ### Beca Excelencia Académica (BEA)
  
  **Beneficios Estudiantiles Educación Superior**
  
  #### Para quiénes
  El 10% de los mejores egresadas/os de Enseñanza Media de su establecimiento, del mismo año de inscripción a la beca. Deben provenir de establecimientos municipales, particulares subvencionados y de administración delegada; e ingresar a la Educación Superior al año siguiente de terminar su Enseñanza Media.
  
  #### Requisitos Socioeconómicos
  Pertenecer al 80% de la población de menores ingresos del país.
  
  #### Requisitos Académicos
  Promedio de notas de Enseñanza Media dentro del 10% más alto del establecimiento.
  
  #### Cobertura
  Financia hasta $1.150.000 del arancel anual de la carrera.
  
  #### Cómo Postular
  1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción informado en la página.
  2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas en la página.
  3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas en la página.
  4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.
  5. Revisa los resultados finales en el sitio en las fechas informadas en la página.
  `,
    origin: "MINEDUC",
    aid_description: "Financia hasta $1.150.000 del arancel anual de la carrera.",
  },
  {
    name: "Beca Distinción a las Trayectorias Educativas (DTE)",
    type: "tuition",
    description: "Beca para financiar la carrera de estudiantes que obtuvieron una de las Distinciones a las Trayectorias Educativas (DTE) en la Prueba de Acceso a la Educación Superior (PAES).",
    requirements: {
      target_description: "Postulantes de la promoción del año, egresados de establecimientos de dependencia Municipal, Servicio Local de Educación, Administración Delegada o Particular Subvencionado, que ingresen a la Educación Superior el año inmediatamente posterior al de su egreso de Enseñanza Media.",
      socioeconomic: {
        description: "Pertenecer al 80% de la población de menores ingresos del país.",
        social_registry_percentage: 80,
      },
      academic: {
        description: "Haber obtenido, al menos, una distinción en una de las categorías de las Distinciones a las Trayectorias Educativas.",
        highschool_average_score: 0,
        min_average_obligatory_exams_score: 0,
        top_ranking_percentage: 0,
      },
      additional_information: {
        description: "Para la categoría Situación de Discapacidad, se requiere el Registro Nacional de Discapacidad (RND). Para la categoría Pueblos Originarios, se requiere el certificado de acreditación de calidad indígena de la CONADI.",
      },
    },
    is_available_for_all_majors: true,
    more_information_url: "https://portal.beneficiosestudiantiles.cl/becas-y-creditos/beca-distincion-las-trayectorias-educativas-dte",
    content: "# Beca Distinción a las Trayectorias Educativas (DTE)\n\n## Cobertura\nFinancia hasta $1.150.000 del arancel anual de la carrera.\n\n## Cómo postular\n1. Completa el formulario FUAS disponible en el sitio durante el periodo de inscripción informado.\n2. Revisa tu información de Nivel Socioeconómico en el sitio durante las fechas informadas.\n3. Revisa tus resultados de Preselección en el sitio durante las fechas informadas.\n4. Matricúlate en una institución de Educación Superior y acredita tu situación socioeconómica en la misma casa de estudios, si corresponde.\n5. Revisa los resultados finales en el sitio en las fechas informadas.",
    origin: "MINEDUC",
    aid_description: "Beca que financia hasta $1.150.000 del arancel anual de la carrera para estudiantes con Distinción a las Trayectorias Educativas en la PAES.",
  }
  
];

