import { shallowMount } from "@vue/test-utils";
import Plp from "../../src/components/Plp/Plp.vue";

describe("Plp.vue", () => {
  it("renders title of page", () => {
    const wrapper = shallowMount(Plp);
    expect(wrapper.find('.plp-title').text()).toMatch('Products');
  });
  it("renders a product", () => {
    const wrapper = shallowMount(Plp);
    expect(wrapper.find('.product').html()).toContain("<li class=\"product\">");
  });
});
