import {
  useGetIdentity,
  useGetLocale,
  useSetLocale,
} from "@pankod/refine-core";
import {
  ActionIcon,
  Group,
  MantineHeader,
  Title,
  Avatar,
  Menu,
} from "@pankod/refine-mantine";
import { IconLanguage } from "@tabler/icons";

import i18n from "i18n";

export const Header: React.FC = () => {
  const { data, isSuccess } = useGetIdentity();
  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  return (
    <MantineHeader height={50} p="xs">
      <Group position="right">
        <Menu shadow="md">
          <Menu.Target>
            <ActionIcon variant="outline">
              <IconLanguage size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {[...(i18n.languages ?? [])].sort().map((lang: string) => (
              <Menu.Item
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                }}
                value={lang}
                color={lang === currentLocale ? "primary" : undefined}
                icon={
                  <Avatar
                    src={`/images/flags/${lang}.svg`}
                    size={18}
                    radius="lg"
                  />
                }
              >
                {lang === "en" ? "English" : "German"}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        {isSuccess && (
          <Group spacing="xs">
            <Title order={6}>{data?.user?.email}</Title>
            {/* <Avatar
              src={user?.data.avatar}
              alt={user?.data.id.toString()}
              radius="xl"
            /> */}
          </Group>
        )}
      </Group>
    </MantineHeader>
  );
};
