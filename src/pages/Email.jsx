import Social from "../components/Social";
import Text from "../components/Text";
function Email() {
  return (
    <div className="xl:w-full sm:w-[750px] xl:px-8 sm:px-0">
      <div className="xl:flex sm:grid gap-y-10">
        <div className="xl:w-4/5 sm:full xl:px-20 sm:px-0">
          <Social></Social>
        </div>
        <div className="xl:w-96 sm:w-full xl:px-4 sm:px-0">
          <Text></Text>
        </div>
      </div>
    </div>
  );
}
export default Email;
