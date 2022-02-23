import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should have default value", () => {
    const h2 = wrapper.find("h2");
    expect(h2.text()).toBe("counter");
  });

  test("should have default value === 100", () => {
    // const pTgas = wrapper.findAll("p");
    // expect(pTgas[1].text()).toBe("100");
    const pTga = wrapper.find("[data-testid='counter'");
    expect(pTga.text()).toBe("100");
  });

  test("should increase value", async () => {
    const btnincrease = wrapper.findAll("button").at(1);
    await btnincrease.trigger("click");
    const pTga = wrapper.find("[data-testid='counter'");
    expect(pTga.text()).toBe("101");
  });

  test("should increase value", async () => {
    const btnDecrease = wrapper.findAll("button").at(0);
    await btnDecrease.trigger("click");
    await btnDecrease.trigger("click");
    const pTga = wrapper.find("[data-testid='counter'");
    expect(pTga.text()).toBe("98");
  });

  test("should use default value", () => {
    const { initValue } = wrapper.props();
    expect(initValue).toBe(100);
  });

  test("should use props", () => {
    const title = "hey";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    expect(wrapper.find("h2").text()).toBe(title);
  });
});
