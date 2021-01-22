import { expect, assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import TableStudents from "@/components/TableStudents.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const students = [
      {
        username: "lfbermeo",
        name: "Luisa Fernanda Bermeo",
        lastConn: "At 3.PM",
        lastApp: "Edge",
        totalTime: 15465
      },
      {
        username: "jjgahona",
        name: "Juan Jose Gahona",
        lastConn: "At past day",
        lastApp: "Architect",
        totalTime: 1245
      }
    ];
    const wrapper = shallowMount(TableStudents, {
      propsData: { studentsData: students }
    });
    expect(wrapper.text()).to.include(students);
  });
});

describe("Connect to StudentOwl-API", () => {
  it("Verify StudentOwl-API status with ping endpoint", () => {
    assert.equal(res.status, 200, "Error al hacer la peticion GET");
  });
  it("Get students from component", () => {
    assert.equal(res.status, 200, "Error al hacer la peticion GET");
    expect(res.status).to.equal(200);
  });
});
