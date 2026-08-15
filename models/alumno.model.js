import mongoose from "mongoose";

// ---------------------------------------------------------------------------
// MODELO — Alumno.
// ---------------------------------------------------------------------------
// TODO: define el schema del alumno. Campos (ver enunciado):
//   - nombre    (texto, obligatorio)
//   - email     (texto, único, obligatorio)
//   - telefono  (texto)
//   - password  (texto, obligatorio) → HASHEADO con bcrypt

const alumnoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    telefono: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

//Antes de guardar lo hace hash
alumnoSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

//Compara password contra hash guardado
alumnoSchema.methods.compararPassword = function (passwordPlano) {
  return bcrypt.compare(passwordPlano, this.password);
};

//Eliminamos la password del objeto JSON que da la respuesta
alumnoSchema.methods.toJSON = function () {
  const alumno = this.toObject();
  delete alumno.password;
  return alumno;
};

export const Alumno = mongoose.model("Alumno", alumnoSchema, "alumnos");
