import Social from "../components/Social";
import Text from "../components/Text";
function Email() {
  return (
    <div className="w-full px-4 py-12">
      <div className="xl:flex sm:grid grid gap-y-10">
        <div className="xl:w-4/5 sm:full xl:px-20 sm:px-0">
          <Social></Social>
        </div>
        <div className="xl:w-96 sm:w-full xl:h-auto sm:h-auto h-[400px] xl:px-4 sm:px-0">
          <Text></Text>
        </div>
      </div>
    </div>
  );
}
export default Email;
