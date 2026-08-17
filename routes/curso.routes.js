import { Router } from "express";
import * as controller from "../controllers/curso.controller.js";
import { proteger, soloRol } from "../middlewares/proteger.js";

// ---------------------------------------------------------------------------
// RUTAS — cursos. La mayoría van protegidas y con rol.
// Recuerda: todo lo de aquí exige token. Pon `proteger` (y `soloRol` donde
// corresponda) delante del controller.
// ---------------------------------------------------------------------------
export const cursoRoutes = Router();

// TODO: conecta cada ruta. Ejemplos de la forma (ver enunciado para el detalle):
cursoRoutes.use(proteger)
//  ── Profesor ──
cursoRoutes.get("/", soloRol("profesor"), controller.listar);
cursoRoutes.post("/", soloRol("profesor"), controller.crear);
cursoRoutes.get(
  "/mis-cursos",
  soloRol("profesor"),
  controller.misCursos,
);
cursoRoutes.put("/:id", soloRol("profesor"), controller.editar);
cursoRoutes.delete("/:id", soloRol("profesor"), controller.borrar);
cursoRoutes.post(
  "/asignarme/:id",
  soloRol("profesor"),
  controller.asignarme,
);
cursoRoutes.get(
  "/alumnos/:id",
  soloRol("profesor"),
  controller.alumnosDelCurso,
);
//
//  ── Alumno ──
cursoRoutes.get(
  "/mis-matriculas",
  soloRol("alumno"),
  controller.misMatriculas,
);
cursoRoutes.post(
  "/matricularme/:id",
  soloRol("alumno"),
  controller.matricularme,
);
cursoRoutes.delete(
  "/matricularme/:id",
  soloRol("alumno"),
  controller.desmatricularme,
);
//
// ⚠️ OJO con el orden: las rutas fijas (/mis-cursos) van ANTES que las
//    dinámicas (/:id), o Express interpretará "mis-cursos" como un :id.
