import Indeciosion from "@/components/Indeciosion.vue";
import { shallowMount } from "@vue/test-utils";

describe("Indeciosion Component", () => {
  let wrapper;
  let clgSpy;
  let getAnswerSpy;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );
  beforeEach(() => {
    wrapper = shallowMount(Indeciosion);
    clgSpy = jest.spyOn(console, "log");
    getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should match Snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should not fire searchs", async () => {
    const input = wrapper.find("input");
    await input.setValue("hola mundo");
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });
  test("should fire getAnswer on ? symbol is enter", async () => {
    const input = wrapper.find("input");
    await input.setValue("hola mundo ?");
    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });
  test("get answer", async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
  });
  test("get answer faild API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("cannot get response"));
    await wrapper.vm.getAnswer();
    expect(wrapper.vm.answer).toBe("cannot get response");
    //cannot get response
  });
});
