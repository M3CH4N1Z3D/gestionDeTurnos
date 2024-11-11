import express, { Request, Response, Router } from "express";

export interface IRecurso {
  id: "string";
  nombre: string;
}

export interface IUser {
  id: string;
  nombre: string;
}

export interface IBoking {
  id: string;
  nombre: string;
}
