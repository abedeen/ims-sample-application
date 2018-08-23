/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { UserGroupImsDetailComponent } from 'app/entities/user-group-ims/user-group-ims-detail.component';
import { UserGroupIms } from 'app/shared/model/user-group-ims.model';

describe('Component Tests', () => {
    describe('UserGroupIms Management Detail Component', () => {
        let comp: UserGroupImsDetailComponent;
        let fixture: ComponentFixture<UserGroupImsDetailComponent>;
        const route = ({ data: of({ userGroup: new UserGroupIms(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [UserGroupImsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(UserGroupImsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UserGroupImsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.userGroup).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
