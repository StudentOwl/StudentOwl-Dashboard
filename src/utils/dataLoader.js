// This file contain many of functions for giving data form the StudentOwl-API
import axios from "axios";
import { convertDateToMiliseconds } from "./dateutils";

const API_URI = "https://api-studentowl.herokuapp.com/";

export async function verifyStatusAPI() {
  try {
    const res = await axios.get(`${API_URI}api/v1.0/ping`);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getStudentByComponent(componentId) {
  try {
    const res = await axios.get(`${API_URI}api/v1.0/students/${componentId}`);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getLogsByComponent(componentId, dates) {
  var msStart = `&msStart=${convertDateToMiliseconds(dates[0])}`;
  var msEnd = `&msEnd=${convertDateToMiliseconds(dates[1])}`;

  var query = `${API_URI}api/v1.0/logs/all?component=${componentId}${msStart}${msEnd}`;
  console.log(query);
  try {
    const res = await axios.get(query);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getLogsByComponentAndStudent(
  componentId,
  studentId,
  dates
) {
  var student = `&msStudent=${studentId}`;
  var msStart = `&msStart=${convertDateToMiliseconds(dates[0])}`;
  var msEnd = `&msEnd=${convertDateToMiliseconds(dates[1])}`;

  var query = `${API_URI}api/v1.0/logs/all?component=GTPR01${student}${msStart}${msEnd}`;
  console.log(query);
  try {
    const res = await axios.get(query);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getNamesbyStudent(studentId, dates) {
  var student = `&student=${studentId}`;
  var msStart = `&msStart=${convertDateToMiliseconds(dates[0])}`;
  var msEnd = `&msEnd=${convertDateToMiliseconds(dates[1])}`;
  var query = `${API_URI}api/v1.0/logs/all?component=GTPR01${student}${msStart}${msEnd}`;
  console.log(query);
  try {
    const res = await axios.get(query);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getDataToolbyDate(componentId, dates) {
  var msStart = `&msStart=${convertDateToMiliseconds(dates[0])}`;
  var msEnd = `&msEnd=${convertDateToMiliseconds(dates[1])}`;

  var query = `${API_URI}api/v1.0/logs/data/all?component=${componentId}${msStart}${msEnd}`;
  console.log(query);
  try {
    const res = await axios.get(query);
    if (res) {
      return res;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
}
