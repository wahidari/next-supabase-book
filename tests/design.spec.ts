import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/design');
});

test.describe('Testing Design Page', () => {
  test('page has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Design/);
  });
});

test.describe('Testing Button Component', () => {
  // BUTTON ----------------------------------------------------
  test('renders a Button component', async ({ page }) => {
    const button = page.getByTestId('button-primary');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/rounded bg-sky-600 px-3 py-1.5 text-sm font-medium/);
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Primary');
  });
  test('renders a Button Success component', async ({ page }) => {
    const button = page.getByTestId('button-success');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium/);
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Success');
  });
  test('renders a Button Danger component', async ({ page }) => {
    const button = page.getByTestId('button-danger');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/rounded bg-red-600 px-3 py-1.5 text-sm font-medium/);
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Danger');
  });
  test('renders a Button Secondary component', async ({ page }) => {
    const button = page.getByTestId('button-secondary');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/rounded bg-gray-50 px-3 py-1.5 text-sm font-medium/);
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Secondary');
  });
  test('renders a Button Tertary component', async ({ page }) => {
    const button = page.getByTestId('button-tertary');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/rounded px-3 py-1.5 text-sm font-medium/);
    await expect(button).toBeEnabled();
    await expect(button).toHaveText('Tertary');
  });
  test('renders a Button Disabled component', async ({ page }) => {
    const button = page.getByTestId('button-disabled');
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/cursor-not-allowed/);
    await expect(button).toBeDisabled();
    await expect(button).toHaveText('Disabled');
    await expect(button).toHaveAttribute('disabled', '');
  });
});

test.describe('Testing LinkButton Component', () => {
  // LINK BUTTON ----------------------------------------------------
  test('renders a Link Button component', async ({ page }) => {
    const linkbutton = page.getByTestId('link-button');
    await expect(linkbutton).toBeVisible();
    await expect(linkbutton).toHaveClass(
      /flex items-center gap-2 rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white/
    );
    await expect(linkbutton).toHaveText('Link Button');
    await expect(linkbutton).toHaveAttribute('href', '/design#linkbutton');
  });
  test('renders a Link Button Secondary component', async ({ page }) => {
    const linkbutton = page.getByTestId('link-button-secondary');
    await expect(linkbutton).toBeVisible();
    await expect(linkbutton).toHaveClass(
      /rounded border border-neutral-300 bg-gray-50 px-3 py-1.5 text-sm font-medium text-neutral-800/
    );
    await expect(linkbutton).toHaveText('Link Button Secondary');
    await expect(linkbutton).toHaveAttribute('href', '/design#linkbutton');
  });
  test('renders a Link Button Tertary component', async ({ page }) => {
    const linkbutton = page.getByTestId('link-button-tertary');
    await expect(linkbutton).toBeVisible();
    await expect(linkbutton).toHaveClass(/rounded px-3 py-1.5 text-sm font-medium text-neutral-600/);
    await expect(linkbutton).toHaveText('Link Button Tertary');
    await expect(linkbutton).toHaveAttribute('href', '/design#linkbutton');
  });
});

test.describe('Testing Heading Component', () => {
  // Heading ----------------------------------------------------
  test('renders a Heading H1 component', async ({ page }) => {
    const heading = page.getByTestId('heading-h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/mb-4 text-3xl font-medium text-neutral-800 dark:text-neutral-100/);
    await expect(heading).toHaveText('Heading 1');
  });
  test('renders a Heading H2 component', async ({ page }) => {
    const heading = page.getByTestId('heading-h2');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/mb-4 text-2xl font-medium text-neutral-800 dark:text-neutral-100/);
    await expect(heading).toHaveText('Heading 2');
  });
  test('renders a Heading H3 component', async ({ page }) => {
    const heading = page.getByTestId('heading-h3');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/mb-4 text-xl font-medium text-neutral-800 dark:text-neutral-100/);
    await expect(heading).toHaveText('Heading 3');
  });
  test('renders a Heading H4 component', async ({ page }) => {
    const heading = page.getByTestId('heading-h4');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-100/);
    await expect(heading).toHaveText(/Heading 4/);
  });
});

test.describe('Testing Container Component', () => {
  // Container ----------------------------------------------------
  test('renders a Container component', async ({ page }) => {
    const container = page.getByTestId('container');
    await expect(container).toBeVisible();
    await expect(container).toHaveClass(/p-8 relative mb-2 rounded-md border bg-white/);
    await expect(container).toHaveText('Container');
  });
  test('renders a Container Small component', async ({ page }) => {
    const container = page.getByTestId('container-small');
    await expect(container).toBeVisible();
    await expect(container).toHaveClass(/p-2 relative mb-2 rounded-md border bg-white/);
    await expect(container).toHaveText('Container Small');
  });
});

test.describe('Testing Badge Component', () => {
  // Badge ----------------------------------------------------
  test('renders a Badge component', async ({ page }) => {
    const badge = page.getByTestId('badge');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-blue-100 font-semibold text-sky-600 dark:bg-sky-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('badge');
  });
  test('renders a Badge Dark component', async ({ page }) => {
    const badge = page.getByTestId('badge-dark');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-gray-100 font-semibold text-gray-600 dark:bg-gray-600 dark:bg-opacity-10 dark:text-gray-400/
    );
    await expect(badge).toHaveText('dark');
  });
  test('renders a Badge Red component', async ({ page }) => {
    const badge = page.getByTestId('badge-red');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-red-100 font-semibold text-red-600 dark:bg-red-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('red');
  });
  test('renders a Badge Green component', async ({ page }) => {
    const badge = page.getByTestId('badge-green');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-green-100 font-semibold text-green-600 dark:bg-green-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('green');
  });
  test('renders a Badge Yellow component', async ({ page }) => {
    const badge = page.getByTestId('badge-yellow');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-yellow-100 font-semibold text-yellow-600 dark:bg-yellow-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('yellow');
  });
  test('renders a Badge Indigo component', async ({ page }) => {
    const badge = page.getByTestId('badge-indigo');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-indigo-100 font-semibold text-indigo-600 dark:bg-indigo-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('indigo');
  });
  test('renders a Badge Purple component', async ({ page }) => {
    const badge = page.getByTestId('badge-purple');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-purple-100 font-semibold text-purple-600 dark:bg-purple-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('purple');
  });
  test('renders a Badge Pink component', async ({ page }) => {
    const badge = page.getByTestId('badge-pink');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-xs whitespace-nowrap bg-pink-100 font-semibold text-pink-600 dark:bg-pink-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('pink');
  });

  // Badge Large ----------------------------------------------------
  test('renders a Badge Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-blue-100 font-semibold text-sky-600 dark:bg-sky-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('badge');
  });
  test('renders a Badge Dark Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-dark-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-gray-100 font-semibold text-gray-600 dark:bg-gray-600 dark:bg-opacity-10 dark:text-gray-400/
    );
    await expect(badge).toHaveText('dark');
  });
  test('renders a Badge Red Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-red-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-red-100 font-semibold text-red-600 dark:bg-red-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('red');
  });
  test('renders a Badge Green Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-green-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-green-100 font-semibold text-green-600 dark:bg-green-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('green');
  });
  test('renders a Badge Yellow Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-yellow-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-yellow-100 font-semibold text-yellow-600 dark:bg-yellow-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('yellow');
  });
  test('renders a Badge Indigo Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-indigo-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-indigo-100 font-semibold text-indigo-600 dark:bg-indigo-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('indigo');
  });
  test('renders a Badge Purple Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-purple-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-purple-100 font-semibold text-purple-600 dark:bg-purple-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('purple');
  });
  test('renders a Badge Pink Large component', async ({ page }) => {
    const badge = page.getByTestId('badge-pink-large');
    await expect(badge).toBeVisible();
    await expect(badge).toHaveClass(
      /text-sm whitespace-nowrap bg-pink-100 font-semibold text-pink-600 dark:bg-pink-600 dark:bg-opacity-10/
    );
    await expect(badge).toHaveText('pink');
  });
});

test.describe('Testing Checkbox Component', () => {
  // Checkbox ----------------------------------------------------
  test('renders a Checkbox component', async ({ page }) => {
    const checkbox = page.getByTestId('checkbox');
    const checkboxLabel = page.locator('label').filter({ hasText: /^Checkbox$/ });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).toHaveClass(
      /h-4 w-4 rounded border-neutral-300 focus:ring-2 focus:ring-emerald-500 group-hover:cursor-pointer/
    );
    await expect(checkboxLabel).toContainText('Checkbox');
  });
  test('renders a Checkbox Checked component', async ({ page }) => {
    const checkbox = page.getByTestId('checkbox-checked');
    const checkboxLabel = page.locator('label').filter({ hasText: /^Checkbox Checked$/ });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toHaveClass(
      /h-4 w-4 rounded border-neutral-300 focus:ring-2 focus:ring-emerald-500 group-hover:cursor-pointer/
    );
    await expect(checkboxLabel).toContainText('Checkbox Checked');
  });
  test('renders a Checkbox Disabled component', async ({ page }) => {
    const checkbox = page.getByTestId('checkbox-disabled');
    const checkboxLabel = page.locator('label').filter({ hasText: /^Checkbox Disabled$/ });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
    await expect(checkbox).toBeDisabled();
    await expect(checkbox).toHaveAttribute('disabled', '');
    await expect(checkbox).toHaveClass(
      /h-4 w-4 rounded border-neutral-300 text-emerald-600 group-hover:cursor-not-allowed dark:border-neutral-700/
    );
    await expect(checkboxLabel).toContainText('Checkbox Disabled');
  });
  test('renders a Checkbox Checked Disabled component', async ({ page }) => {
    const checkbox = page.getByTestId('checkbox-checked-disabled');
    const checkboxLabel = page.locator('label').filter({ hasText: /^Checkbox Checked Disabled$/ });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
    await expect(checkbox).toHaveAttribute('disabled', '');
    await expect(checkbox).toHaveClass(
      /h-4 w-4 rounded border-neutral-300 text-emerald-600 group-hover:cursor-not-allowed dark:border-neutral-700/
    );
    await expect(checkboxLabel).toContainText('Checkbox Checked Disabled');
  });
});

test.describe('Testing Radio Component', () => {
  // Radio ----------------------------------------------------
  test('renders a Radio component', async ({ page }) => {
    const radio = page.getByTestId('radio');
    const radioLabel = page.locator('label').filter({ hasText: /^Blue$/ });
    await expect(radio).toBeVisible();
    await expect(radio).not.toBeChecked();
    await expect(radio).toHaveClass(
      /h-4 w-4 border-neutral-300 focus:ring-2 focus:ring-emerald-500 group-hover:cursor-pointer/
    );
    await expect(radioLabel).toContainText('Blue');
  });
  test('renders a Radio Checked component', async ({ page }) => {
    const radio = page.getByTestId('radio-checked');
    const radioLabel = page.locator('label').filter({ hasText: /^Red$/ });
    await expect(radio).toBeVisible();
    await expect(radio).toBeChecked();
    await expect(radio).toHaveClass(
      /h-4 w-4 border-neutral-300 focus:ring-2 focus:ring-emerald-500 group-hover:cursor-pointer/
    );
    await expect(radioLabel).toContainText('Red');
  });
  test('renders a Radio Disabled component', async ({ page }) => {
    const radio = page.getByTestId('radio-disabled');
    const radioLabel = page.locator('label').filter({ hasText: /^Radio Disabled$/ });
    await expect(radio).toBeVisible();
    await expect(radio).not.toBeChecked();
    await expect(radio).toBeDisabled();
    await expect(radio).toHaveAttribute('disabled', '');
    await expect(radio).toHaveClass(
      /h-4 w-4 border-neutral-300 text-emerald-600 group-hover:cursor-not-allowed dark:border-neutral-700/
    );
    await expect(radioLabel).toContainText('Radio Disabled');
  });
  test('renders a Radio Checked Disabled component', async ({ page }) => {
    const radio = page.getByTestId('radio-checked-disabled');
    const radioLabel = page.locator('label').filter({ hasText: /^Radio Checked Disabled$/ });
    await expect(radio).toBeVisible();
    await expect(radio).toBeChecked();
    await expect(radio).toBeDisabled();
    await expect(radio).toHaveAttribute('disabled', '');
    await expect(radio).toHaveClass(
      /h-4 w-4 border-neutral-300 text-emerald-600 group-hover:cursor-not-allowed dark:border-neutral-700/
    );
    await expect(radioLabel).toContainText('Radio Checked Disabled');
  });
});

test.describe('Testing Input Component', () => {
  // Input ----------------------------------------------------
  test('renders a Input component', async ({ page }) => {
    const input = page.getByTestId('input');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    await expect(input).toBeEditable();
    await expect(input).toHaveValue('');
    await expect(input).toHaveClass(/mt-2 w-full rounded-md border bg-white px-4/);
  });
  test('renders a Input Disabled component', async ({ page }) => {
    const input = page.getByTestId('input-disabled');
    await expect(input).toBeVisible();
    await expect(input).not.toBeEnabled();
    await expect(input).not.toBeEditable();
    await expect(input).toHaveValue('Has a value');
    await expect(input).toHaveClass(/mt-2 w-full cursor-not-allowed rounded-md/);
  });
});

test.describe('Testing Label Component', () => {
  // Label ----------------------------------------------------
  test('renders a Label component', async ({ page }) => {
    const label = page.getByTestId('label');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Label');
    await expect(label).toHaveClass(/block text-gray-800 dark:text-neutral-300/);
  });
});

test.describe('Testing LabeledInput Component', () => {
  // LabeledInput ----------------------------------------------------
  test('renders a LabeledInput component', async ({ page }) => {
    const input = page.getByTestId('labeledinput');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    await expect(input).toBeEditable();
    await expect(input).toHaveValue('');
    await expect(input).toHaveClass(/mt-2 w-full rounded-md px-4/);
  });
  test('renders a LabeledInput type Password component', async ({ page }) => {
    const input = page.getByTestId('labeledinput-password');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    await expect(input).toBeEditable();
    await expect(input).toHaveValue('');
    await expect(input).toHaveAttribute('type', 'password');
    await expect(input).toHaveClass(/mt-2 w-full rounded-md px-4/);
  });
  test('renders a LabeledInput Disabled component', async ({ page }) => {
    const input = page.getByTestId('labeledinput-disabled');
    await expect(input).toBeVisible();
    await expect(input).not.toBeEnabled();
    await expect(input).not.toBeEditable();
    await expect(input).toHaveClass(/mt-2 w-full cursor-not-allowed rounded-md/);
  });
});

test.describe('Testing InputDebounce Component', () => {
  // InputDebounce ----------------------------------------------------
  test('renders a InputDebounce component', async ({ page }) => {
    const input = page.getByTestId('inputdebounce');
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();
    await expect(input).toBeEditable();
    await expect(input).toHaveValue('');
    await expect(input).toHaveClass(/mt-2 w-full rounded-md border border-gray-300/);
    await page.getByTestId('inputdebounce').fill('inputdebounce');
    const text = page.getByTestId('inputdebounce-text');
    await expect(text).toHaveText('inputdebounce');
  });
});

test.describe('Testing TextArea Component', () => {
  // TextArea ----------------------------------------------------
  test('renders a TextArea component', async ({ page }) => {
    const textarea = page.getByTestId('textarea');
    await expect(textarea).toBeVisible();
    await expect(textarea).toBeEnabled();
    await expect(textarea).toBeEditable();
    await expect(textarea).toHaveValue('');
    await expect(textarea).toHaveClass(
      'mt-2 w-full rounded-md bg-white p-3 text-sm outline-none transition-all dark:bg-neutral-900 dark:text-white min-h-[80px] border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-neutral-700'
    );
  });
  test('renders a TextArea Disabled component', async ({ page }) => {
    const textarea = page.getByTestId('textarea-disabled');
    await expect(textarea).toBeVisible();
    await expect(textarea).not.toBeEnabled();
    await expect(textarea).not.toBeEditable();
    await expect(textarea).toHaveValue('');
    await expect(textarea).toHaveClass(
      'mt-2 w-full cursor-not-allowed rounded-md p-3 text-sm text-neutral-500 min-h-[80px] border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800'
    );
  });
});

test.describe('Testing FileInput Component', () => {
  // FileInput ----------------------------------------------------
  test('renders a FileInput component', async ({ page }) => {
    const fileinput = page.getByTestId('fileinput');
    await expect(fileinput).not.toBeVisible();
    await expect(fileinput).toBeEnabled();
    await expect(fileinput).toBeEditable();
    await expect(fileinput).toHaveValue('');
    await expect(fileinput).toHaveClass(/mt-2 hidden h-12 w-full rounded-md bg-white px-4/);
  });
});

test.describe('Testing Select Component', () => {
  // Select ----------------------------------------------------
  test('renders a Select component', async ({ page }) => {
    const select = page.getByTestId('select');
    await expect(select).toBeVisible();
    await expect(select).toBeEnabled();
    await expect(select).toBeEditable();
    await expect(select).toHaveValue('blue');
    await expect(select).toHaveClass(/mt-2 block w-full cursor-pointer rounded-md border/);
    await expect(page.getByTestId('selectoption-red')).toBeVisible();
    await expect(page.getByTestId('selectoption-red')).toHaveAttribute('value', 'red');
    await expect(page.getByTestId('selectoption-red')).toHaveText('Red');
    await expect(page.getByTestId('selectoption-blue')).toBeVisible();
    await expect(page.getByTestId('selectoption-blue')).toHaveAttribute('value', 'blue');
    await expect(page.getByTestId('selectoption-blue')).toHaveText('Blue');
    await expect(page.getByTestId('selectoption-green')).toBeVisible();
    await expect(page.getByTestId('selectoption-green')).toHaveAttribute('value', 'green');
    await expect(page.getByTestId('selectoption-green')).toHaveText('Green');
  });
});
