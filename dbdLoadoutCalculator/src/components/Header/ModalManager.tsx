import { ButtonModal } from "../UI";

type Props = {
  type: "help" | "info";
  onConfirm: () => void;
};

const version = "v0.1.1";

export const ModalManager = ({ type, onConfirm }: Props) => {
  if (type === "help") {
    return (
      <ButtonModal onButtonClick={onConfirm} modalTitle="Help">
        <h3 className="text-2xl font-semibold">
          Welcome to DBD Loadout Calculator!
          <span className="text-sm text-gray-300 mt-4"> {version}</span>
        </h3>

        <section className="w-[50ch] text-gray-200">
          <p className="pt-2">
            If you ever wondered how perk and items effect your objective times
            without having to do the math, then this is the site for you!
          </p>
          <p className="pt-2">
            This site aims to mimic the in-game UI as much as possible, so you
            have your regular items and addons as seen, but perks have special
            behavior
          </p>
        </section>
        <h4 className="text-xl font-semibold pt-2">Perk Behavior</h4>
        <section className="w-[50ch] text-gray-200">
          <p>There are 3 types of perks</p>
          <ul className="ml-4">
            <li>
              <p>
                <span className="text-gold">Toggle</span> perks must be set to
                either have perk effect applied to time
              </p>
            </li>
            <li>
              <p>
                <span className="text-gold">Select</span> perks must select from
                the set of possible active modifers the perk offers if it is
                mutally exclusive
              </p>
            </li>
            <li>
              <p>
                <span className="text-gold">Token</span> perks must be set with
                a value to properly apply stacking effects
              </p>
            </li>
          </ul>
          <p className="text-2xl underline text-gray-300 mb-4">
            Be sure to read the info tab for currently supported operations!
          </p>
          <p>
            Last Updated: <span className="text-blue-300">10/3/23</span>
          </p>
        </section>
      </ButtonModal>
    );
  } else if (type === "info") {
    return (
      <ButtonModal onButtonClick={onConfirm} modalTitle="Info">
        <div className="overflow-y-auto h-96 w-[65ch] mb-4">
          <h3 className="text-2xl font-semibold">Acknowledgments</h3>
          <section>
            <ul className="list-disc ml-5">
              <li>
                Perk, Item, and Addon Images and Descriptions were taken from
                the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki"
                  className="font-bold underline text-blue-400"
                >
                  Dead by Daylight Wiki
                </a>{" "}
                which is under{" "}
                <span className="font-semibold italic">
                  Creative Commons Attribution-Share Alike License 3.0{" "}
                </span>
              </li>
              <li>
                All Elements pertaining to Dead by Daylight belong to Behaviour
                Interactive
              </li>
              <li>
                While this site does not directly collect or store user data as
                of {version}, data fetches are done through Google Firebase and
                service records user analytics. More information on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://firebase.google.com/support/privacy"
                  className="font-bold underline text-blue-400"
                >
                  Firebase Privacy and Security
                </a>{" "}
                page
              </li>
            </ul>
          </section>
          <h3 className="underline text-2xl font-semibold">
            General Info for
            <span className="text-gold mt-4"> {version}</span>
          </h3>
          <section className="text-gray-200">
            <h4 className="text-xl">Currently Supported:</h4>
            <ul className="list-disc ml-4">
              <li>
                Generator Time Calcualtion{" "}
                <ul className="list-disc ml-5">
                  <li>
                    ToolBox{" "}
                    <span className="font-semibold italic">Charges</span> and{" "}
                    <span className="font-semibold italic">Speed</span> applied
                    to calculation
                  </li>
                  <li>
                    Addon addtional{" "}
                    <span className="font-semibold italic">Charges</span> and{" "}
                    <span className="font-semibold italic">Speed</span> applied
                    to calculation
                  </li>
                  <li>
                    Skill Check counter added to mock great skill check bonuses
                  </li>
                  <li>Perk Support, limited to select, more below</li>
                </ul>
              </li>
              <li>
                Generator Perks{" "}
                <ul className="list-disc ml-5">
                  <li>
                    <p>
                      <span className="text-purple-400 font-semibold italic">
                        Deja Vu, Friendly Competition, Object of Obession,
                        Resilience, Sole Survivor, and Spine Chill
                      </span>{" "}
                      are added as{" "}
                      <span className="text-gold italic">Toggle perks</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-purple-400 font-semibold italic">
                        Potential Energy
                      </span>{" "}
                      and{" "}
                      <span className="text-purple-400 font-semibold italic">
                        Fast Track
                      </span>{" "}
                      are added as{" "}
                      <span className="text-gold italic">Token perks</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-purple-400 font-semibold italic">
                        Overzealous
                      </span>{" "}
                      is added as a{" "}
                      <span className="text-gold italic">Select perk</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-purple-400 font-semibold italic">
                        Prove Thyself
                      </span>{" "}
                      is added as a always in effect perk
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-purple-400 font-semibold italic">
                        Streetwise
                      </span>{" "}
                      is added as an always in effect perk that provides item <span className="text-orange-400">Efficiency</span> buff{" "}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <h3 className="text-xl">Future Features (soon)</h3>
          <section className="text-gray-200">
            <ul className="list-disc ml-4">
              <li>General optimizations and refactoring</li>
              <li>
                Support <span className="text-green-400">Self Healing</span> and{" "}
                <span className="text-green-400">Altruistic Healing</span>{" "}
                objective times
              </li>
            </ul>
          </section>
          <h3 className="">Future Features (far)</h3>
          <section className=" text-sm text-gray-200">
            <ul className="list-disc ml-4">
              <li>
                <span className="text-blue-300">Boon</span> and{" "}
                <span className="text-blue-300">Partner</span> perk Support,
                expanded perk apply effects
              </li>
              <li>
                <span className="text-red-500">Deuff</span> perk support
              </li>
              <li>
                Advanced calculation invoving 4 survivors each with their own
                perks and items. Add global active effects that can be applied
                to each respective survivor.
              </li>
              <li>
                Build randomizer with filter for Items, Addons, Perks. Filter to
                include perk filter by specific perk, character, effect type
              </li>
              <li>User Profiles and Build Sharing</li>
            </ul>
          </section>
        </div>
      </ButtonModal>
    );
  }
};

//https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki
